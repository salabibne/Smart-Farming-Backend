import { Injectable } from '@nestjs/common';
import { CreateInventoryCategoryDto } from './dto/create-inventory_category.dto';
import { UpdateInventoryCategoryDto } from './dto/update-inventory_category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createInventoryCategoryDto: CreateInventoryCategoryDto) {
    const category = await this.prisma.inventoryCategory.create({
      data: createInventoryCategoryDto,
    });
    return {
      message: 'Inventory category created successfully',
      data: category,
      status: 201,
    };
  }
  async findAll() {
    const categories = await this.prisma.inventoryCategory.findMany();
    return {
      message: 'Inventory categories retrieved successfully',
      status: 200,
      data: categories,
    };
  }

  async findOne(id: string) {
    const category = await this.prisma.inventoryCategory.findUnique({
      where: { id },
    });
    if (!category) {
      return {
        message: 'Inventory category not found',
        status: 404,
      };
    }
    return {
      message: 'Inventory category retrieved successfully',
      status: 200,
      data: category,
    };
  }

  update(id: number, updateInventoryCategoryDto: UpdateInventoryCategoryDto) {
    return `This action updates a #${id} inventoryCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryCategory`;
  }
}
