import { Injectable } from '@nestjs/common';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class InventoryManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventoryManagementDto: CreateInventoryManagementDto, userId: string) {
    const inventory = await this.prisma.inventoryManagement.create({
      data: {
        ...createInventoryManagementDto,
        userId,
      },
    });
    const stockEntry = await this.prisma.inventoryTransaction.create({
      data: {
        inventoryId: inventory.id,
        stockType: 'IN',
        purpose: 'INITIATE_STOCK',
        transactionQuantity: 0,
        stock: 0,
      },
    });
    if (inventory && stockEntry) {
      return {
        message: 'Inventory created successfully',
        data: inventory,
        status: 201,
      };
    }
  }

  async findAll(userId: string) {
    try {
      const inventoriesItems = await this.prisma.inventoryManagement.findMany({
        where: { userId },
        include: {
          category: true,
          transactions: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      });

      return {
        message: 'Inventory items retrieved successfully',
        status: 200,
        data: inventoriesItems,
      };
    } catch (error) {
      return {
        message: 'Error retrieving inventory items',
        status: 500,
        error: error.message,
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryManagement`;
  }

  async update(
    id: string,
    updateInventoryManagementDto: UpdateInventoryManagementDto,
    userId: string
  ) {
    const item = await this.prisma.inventoryManagement.findUnique({
      where: { id , userId },
    });
    if (!item) {
      return {
        message: 'Inventory item not found',
        status: 404,
      };
    }
    const updatedItem = await this.prisma.inventoryManagement.update({
      where: { id },
      data: updateInventoryManagementDto,
    });
    return {
      message: 'Inventory item updated successfully',
      data: updatedItem,
      status: 200,
    };
  }

  remove(id: string) {
    return `This action removes a #${id} inventoryManagement`;
  }
}
