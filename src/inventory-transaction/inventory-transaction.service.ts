import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { stat } from 'fs';

@Injectable()
export class InventoryTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async stockIn(createInventoryTransactionDto: CreateInventoryTransactionDto) {
    try {
      const item = await this.prisma.inventoryTransaction.findFirst({
        where: { inventoryId: createInventoryTransactionDto.inventoryId },
        orderBy: { createdAt: 'desc' },
      });

      if (createInventoryTransactionDto.stockType === 'IN') {
        const newStock =
          (item?.stock ?? 0) +
          createInventoryTransactionDto.transactionQuantity;

        const stockedInItem = await this.prisma.inventoryTransaction.create({
          data: {
            ...createInventoryTransactionDto,
            stock: newStock,
          },
        });
        return {
          message: 'Stock IN processed successfully',
          data: stockedInItem,
          status: 201,
        };
      }
    } catch (error) {
      console.error('Stock IN Error:', error);
      throw new InternalServerErrorException('Failed to process stock IN');
    }
  }

  async stockOut(createInventoryTransactionDto: CreateInventoryTransactionDto) {
    try {
      const item = await this.prisma.inventoryTransaction.findFirst({
        where: { inventoryId: createInventoryTransactionDto.inventoryId },
        orderBy: { createdAt: 'desc' },
      });

      if (createInventoryTransactionDto.stockType === 'OUT') {
        const newStock =
          (item?.stock ?? 0) -
          createInventoryTransactionDto.transactionQuantity;

        if (newStock < 0) {
          return {
            message: 'Insufficient stock for this transaction',
            status: 400,
          };
        }

        const minimumStockThreshold =
          await this.prisma.inventoryManagement.findFirst({
            where: { id: createInventoryTransactionDto.inventoryId },
            select: { minimum_stock_level_alert: true },
          });

        if (
          minimumStockThreshold &&
          newStock <= minimumStockThreshold.minimum_stock_level_alert
        ) {
          const lowStockOut = await this.prisma.inventoryTransaction.create({
            data: {
              ...createInventoryTransactionDto,
              stock: newStock,
            },
          });
          return {
            message: 'Stock OUT processed with low stock alert',
            data: lowStockOut,
            status: 201,
          };
        }

        const stockOut = await this.prisma.inventoryTransaction.create({
          data: {
            ...createInventoryTransactionDto,
            stock: newStock,
          },
        });
        return {
          message: 'Stock OUT processed successfully',
          data: stockOut,
          status: 201,
        };
      }
    } catch (error) {
      console.error('Stock OUT Error:', error);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Failed to process stock OUT');
    }
  }

  async findAll() {
    const findTransactions = await this.prisma.inventoryTransaction.findMany({
      orderBy: { createdAt: 'desc' },
      include: { inventory: true },
    });
    return {
      data: findTransactions,
      message: 'Transactions retrieved successfully',
      status: 200,
    };
  }

  async findOne(id: string) {
    try {
      const transaction = await this.prisma.inventoryTransaction.findMany({
        where: { inventoryId: id },
        orderBy: { createdAt: 'desc' },
        include: { inventory: true },
      });
      return {
        data: transaction,
        message: 'Transaction retrieved successfully',
        status: 200,
      };
    } catch (error) {
      console.error('Find One Error:', error);
      throw new InternalServerErrorException('Failed to retrieve transaction');
    }
  }


}





