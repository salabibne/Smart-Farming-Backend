// stockIn, stock out, find all transactions, find one transaction by inventory id 
// inventory-transaction.service.ts
// Handles inventory transactions such as stock in and stock out operations,
// as well as retrieving transaction records.



import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { stat } from 'fs';

// @Injectable()
// export class InventoryTransactionService {
//   constructor(private readonly prisma: PrismaService) {}

//   async stockIn(createInventoryTransactionDto: CreateInventoryTransactionDto, userId: string) {
//     try {
//       const item = await this.prisma.inventoryTransaction.findFirst({
//         where: { inventoryId: createInventoryTransactionDto.inventoryId },
//         orderBy: { createdAt: 'desc' },
//       });

//       if (createInventoryTransactionDto.stockType === 'IN') {
//         const newStock =
//           (item?.stock ?? 0) +
//           createInventoryTransactionDto.transactionQuantity;

//         const stockedInItem = await this.prisma.inventoryTransaction.create({
//           data: {
//             ...createInventoryTransactionDto,
//             stock: newStock,
//           },
//         });
//         return {
//           message: 'Stock IN processed successfully',
//           data: stockedInItem,
//           status: 201,
//         };
//       }
//     } catch (error) {
//       console.error('Stock IN Error:', error);
//       throw new InternalServerErrorException('Failed to process stock IN');
//     }
//   }

//   async stockOut(createInventoryTransactionDto: CreateInventoryTransactionDto,userId: string) {
//     try {
//       const item = await this.prisma.inventoryTransaction.findFirst({
//         where: { inventoryId: createInventoryTransactionDto.inventoryId },
//         orderBy: { createdAt: 'desc' },
//       });

//       if (createInventoryTransactionDto.stockType === 'OUT') {
//         const newStock =
//           (item?.stock ?? 0) -
//           createInventoryTransactionDto.transactionQuantity;

//         if (newStock < 0) {
//           return {
//             message: 'Insufficient stock for this transaction',
//             status: 400,
//           };
//         }

//         const minimumStockThreshold =
//           await this.prisma.inventoryManagement.findFirst({
//             where: { id: createInventoryTransactionDto.inventoryId },
//             select: { minimum_stock_level_alert: true },
//           });

//         if (
//           minimumStockThreshold &&
//           newStock <= minimumStockThreshold.minimum_stock_level_alert
//         ) {
//           const lowStockOut = await this.prisma.inventoryTransaction.create({
//             data: {
//               ...createInventoryTransactionDto,
//               stock: newStock,
//             },
//           });
//           return {
//             message: 'Stock OUT processed with low stock alert',
//             data: lowStockOut,
//             status: 201,
//           };
//         }

//         const stockOut = await this.prisma.inventoryTransaction.create({
//           data: {
//             ...createInventoryTransactionDto,
//             stock: newStock,
//           },
//         });
//         return {
//           message: 'Stock OUT processed successfully',
//           data: stockOut,
//           status: 201,
//         };
//       }
//     } catch (error) {
//       console.error('Stock OUT Error:', error);

//       if (error instanceof BadRequestException) {
//         throw error;
//       }

//       throw new InternalServerErrorException('Failed to process stock OUT');
//     }
//   }

//   async findAll(userId) {
//     const findTransactions = await this.prisma.inventoryTransaction.findMany({
//       orderBy: { createdAt: 'desc' },
//       include: { inventory: true },
//     });
//     return {
//       data: findTransactions,
//       message: 'Transactions retrieved successfully',
//       status: 200,
//     };
//   }

//   async findOne(id: string,userId) {
//     try {
//       const transaction = await this.prisma.inventoryTransaction.findMany({
//         where: { inventoryId: id },
//         orderBy: { createdAt: 'desc' },
//         include: { inventory: true },
//       });
//       return {
//         data: transaction,
//         message: 'Transaction retrieved successfully',
//         status: 200,
//       };
//     } catch (error) {
//       console.error('Find One Error:', error);
//       throw new InternalServerErrorException('Failed to retrieve transaction');
//     }
//   }


// }



@Injectable()
export class InventoryTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  // Stock IN
  async stockIn(createDto: CreateInventoryTransactionDto, userId: string) {
    // 1️⃣ Verify inventory ownership
    const inventory = await this.prisma.inventoryManagement.findFirst({
      where: { id: createDto.inventoryId, userId },
    });

    if (!inventory) {
      throw new BadRequestException(
        'Inventory not found or you do not have access to it.',
      );
    }

    // 2️⃣ Get last stock
    const lastTransaction = await this.prisma.inventoryTransaction.findFirst({
      where: { inventoryId: createDto.inventoryId },
      orderBy: { createdAt: 'desc' },
    });

    const newStock =
      (lastTransaction?.stock ?? 0) + createDto.transactionQuantity;

    const transaction = await this.prisma.inventoryTransaction.create({
      data: {
        ...createDto,
        stock: newStock,
        userId
      },
    });

    return {
      message: 'Stock IN processed successfully',
      data: transaction,
      status: 201,
    };
  }

  // Stock OUT
  async stockOut(createDto: CreateInventoryTransactionDto, userId: string) {
    // 1️⃣ Verify inventory ownership
    const inventory = await this.prisma.inventoryManagement.findFirst({
      where: { id: createDto.inventoryId, userId },
    });

    if (!inventory) {
      throw new BadRequestException(
        'Inventory not found or you do not have access to it.',
      );
    }

    // 2️⃣ Get last stock
    const lastTransaction = await this.prisma.inventoryTransaction.findFirst({
      where: { inventoryId: createDto.inventoryId },
      orderBy: { createdAt: 'desc' },
    });

    const newStock =
      (lastTransaction?.stock ?? 0) - createDto.transactionQuantity;

    if (newStock < 0) {
      throw new BadRequestException('Insufficient stock for this transaction');
    }

    const transactionData: any = {
      ...createDto,
      stock: newStock,
      userId
    };

    const transaction = await this.prisma.inventoryTransaction.create({
      data: transactionData,
    });

    const lowStockAlert =
      newStock <= inventory.minimum_stock_level_alert ? true : false;

    return {
      message: lowStockAlert
        ? 'Stock OUT processed with low stock alert'
        : 'Stock OUT processed successfully',
      data: transaction,
      status: 201,
    };
  }

  // Get all transactions for this user
  async findAll(userId: string) {
    const transactions = await this.prisma.inventoryTransaction.findMany({
      where: { inventory: { userId } }, // 🔐 filter by user
      orderBy: { createdAt: 'desc' },
      include: { inventory: true },
    });

    return {
      data: transactions,
      message: 'Transactions retrieved successfully',
      status: 200,
    };
  }

  // Get transactions by inventory ID (only for user's own inventory)
  async findOne(inventoryId: string, userId: string) {
    const inventory = await this.prisma.inventoryManagement.findFirst({
      where: { id: inventoryId, userId },
    });

    if (!inventory) {
      throw new BadRequestException(
        'Inventory not found or you do not have access to it.',
      );
    }

    const transactions = await this.prisma.inventoryTransaction.findMany({
      where: { inventoryId },
      orderBy: { createdAt: 'desc' },
      include: { inventory: true },
    });

    return {
      data: transactions,
      message: 'Transactions retrieved successfully',
      status: 200,
    };
  }
}


