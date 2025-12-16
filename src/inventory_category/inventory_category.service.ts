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

  async findCategoriesActive(){
    const categories = await this.prisma.inventoryCategory.findMany({
      where: { status: 'ACTIVE' },
    });
    return {
      message: 'Active inventory categories retrieved successfully',
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

  async update(
    id: string,
    updateInventoryCategoryDto: UpdateInventoryCategoryDto,
  ) {
    const updatedCategory = await this.prisma.inventoryCategory.update({
      where: { id },
      data: updateInventoryCategoryDto,
    });
    return {
      message: 'Inventory category updated successfully',
      status: 200,
      data: updatedCategory,
    };
  }

  async remove(id: string) {
    // check if the category exists
    const count = await this.prisma.inventoryManagement.count({
      where: { categoryId: id },
    });
    if (count > 0) {
      return {
        message: 'Cannot delete category with associated inventory items',
        status: 400,
      };
    }
    const deleteCategory = await this.prisma.inventoryCategory.delete({
      where: { id },
    });

    return {
      message: 'Inventory category deleted successfully',
      status: 200,
      data: deleteCategory,
    };
  }
}
