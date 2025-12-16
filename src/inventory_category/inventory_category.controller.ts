import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryCategoryService } from './inventory_category.service';
import { CreateInventoryCategoryDto } from './dto/create-inventory_category.dto';
import { UpdateInventoryCategoryDto } from './dto/update-inventory_category.dto';

@Controller('inventory-category')
export class InventoryCategoryController {
  constructor(private readonly inventoryCategoryService: InventoryCategoryService) {}

  @Post('create')
  create(@Body() createInventoryCategoryDto: CreateInventoryCategoryDto) {
    return this.inventoryCategoryService.create(createInventoryCategoryDto);
  }

  @Get('get-all')
  findAll() {
    return this.inventoryCategoryService.findAll();
  }

  @Get('get-active-categories')
  findCategoriesActive() {
    return this.inventoryCategoryService.findCategoriesActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryCategoryService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateInventoryCategoryDto: UpdateInventoryCategoryDto) {
    return this.inventoryCategoryService.update(id, updateInventoryCategoryDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.inventoryCategoryService.remove(id);
  }
}
