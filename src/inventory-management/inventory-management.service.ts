import { Injectable } from '@nestjs/common';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class InventoryManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventoryManagementDto: CreateInventoryManagementDto) {
    const inventory = await this.prisma.inventoryManagement.create({
      data: createInventoryManagementDto,
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

  findAll() {
    return `This action returns all inventoryManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryManagement`;
  }

  update(
    id: number,
    updateInventoryManagementDto: UpdateInventoryManagementDto,
  ) {
    return `This action updates a #${id} inventoryManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryManagement`;
  }
}
