// src/finance/finance.service.ts

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Assuming you have a central PrismaService
import { CreateFinanceDto } from './dto/create-finance.dto';
import { TransactionType } from '@prisma/client';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  /**
   * 1. Record a Transaction (Create)
   * Creates a new financial transaction record.
   */
  async create(createFinanceDto: CreateFinanceDto, userId: string) {
    const { inventoryId, amount, ...rest } = createFinanceDto;

    // 1. Logic to handle optional Inventory ID
    // If inventoryId is an empty string or null, we treat it as undefined
    const linkedInventoryId =
      inventoryId && inventoryId.trim() !== '' ? inventoryId : null;

    try {
      const finance = await this.prisma.finnace.create({
        data: {
          ...rest,
          amount: Number(amount),
          // Link the inventory only if we have a valid ID
          inventoryId: linkedInventoryId,
          userId,

          // Use provided date or default to now
        },

        include: {
          inventory: true,
        },
      });
      return {
        message: 'Transaction recorded successfully',
        status: 201,
        data: finance,
      };
    } catch (error) {
      // Catch foreign key errors (e.g., if the user provides an inventoryId that doesn't exist)
      if (error.code === 'P2003') {
        throw new BadRequestException(
          'The provided Inventory ID does not exist.',
        );
      }
      throw error;
    }
  }

  /**
   * 2. View All Transactions (Read)
   * Retrieves all finance transactions.
   */
  async findAll(userId: string) {
    return this.prisma.finnace.findMany({
      where: { userId },
      orderBy: {
        transactionDate: 'desc', // Show newest transactions first
      },
      include: {
        inventory: true,
      },
    });
  }

  /**
   * 3. Calculate Total Balance (Reporting)
   * Calculates the net financial position (Total Income - Total Expense).
   */
  async calculateNetBalance(userId: string) {
    // Aggregate income amounts
    const incomeResult = await this.prisma.finnace.aggregate({
      _sum: { amount: true },
      where: { transactionType: TransactionType.INCOME, userId },
    });
    const totalIncome = incomeResult._sum.amount || 0;

    // Aggregate expense amounts
    const expenseResult = await this.prisma.finnace.aggregate({
      _sum: { amount: true },
      where: { transactionType: TransactionType.EXPENSE, userId },
    });
    const totalExpense = expenseResult._sum.amount || 0;

    const netBalance = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      netBalance,
    };
  }

  /**
   * 4. Filter by Type/Category (Reporting)
   * Retrieves all transactions for a specific category.
   */
  async findByCategory(category: string, userId: string) {
    console.log('Catch');
    return this.prisma.finnace.findMany({
      where: {
        transactionCategory: category as any, // Cast to any for dynamic enum usage
        userId,
      },
      orderBy: {
        transactionDate: 'desc',
      },
    });
  }
  async getDashboardKPIs(userId: string, from?: string, to?: string) {
    // Build date filter only if dates are provided
    const dateFilter =
      from && to
        ? {
            transactionDate: {
              gte: new Date(from),
              lte: new Date(to),
            },
          }
        : {};

    // 1️⃣ Total Income (only for this user)
    const incomeResult = await this.prisma.finnace.aggregate({
      _sum: { amount: true },
      where: {
        transactionType: 'INCOME',
        userId, // 🔐 user isolation
        ...dateFilter,
      },
    });

    // 2️⃣ Total Expense
    const expenseResult = await this.prisma.finnace.aggregate({
      _sum: { amount: true },
      where: {
        transactionType: 'EXPENSE',
        userId, // 🔐 user isolation
        ...dateFilter,
      },
    });

    const totalIncome = incomeResult._sum.amount || 0;
    const totalExpense = expenseResult._sum.amount || 0;
    const netProfit = totalIncome - totalExpense;

    // 3️⃣ Number of Transactions
    const totalTransactions = await this.prisma.finnace.count({
      where: {
        userId,
        ...dateFilter,
      },
    });

    // 4️⃣ Highest Expense Category
    const highestExpenseCategory = await this.prisma.finnace.groupBy({
      by: ['transactionCategory'],
      where: {
        transactionType: 'EXPENSE',
        userId,
        ...dateFilter,
      },
      _sum: { amount: true },
      orderBy: { _sum: { amount: 'desc' } },
      take: 1,
    });

    return {
      period: from && to ? { from, to } : 'ALL_TIME',
      totalIncome,
      totalExpense,
      netProfit,
      totalTransactions,
      highestExpenseCategory:
        highestExpenseCategory.length > 0
          ? {
              category: highestExpenseCategory[0].transactionCategory,
              amount: highestExpenseCategory[0]._sum.amount,
            }
          : null,
    };
  }
}
