import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';

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

        return await this.prisma.inventoryTransaction.create({
          data: {
            ...createInventoryTransactionDto,
            stock: newStock,
          },
        });
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
          throw new BadRequestException(
            'Insufficient stock for this transaction',
          );
        }

        return await this.prisma.inventoryTransaction.create({
          data: {
            ...createInventoryTransactionDto,
            stock: newStock,
          },
        });
      }
    } catch (error) {
      console.error('Stock OUT Error:', error);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Failed to process stock OUT');
    }
  }

  findAll() {
    return `This action returns all inventoryTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryTransaction`;
  }

  update(
    id: number,
    updateInventoryTransactionDto: UpdateInventoryTransactionDto,
  ) {
    return `This action updates a #${id} inventoryTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryTransaction`;
  }
}
