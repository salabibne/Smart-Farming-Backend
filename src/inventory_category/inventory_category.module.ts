import { Module } from '@nestjs/common';
import { InventoryCategoryService } from './inventory_category.service';
import { InventoryCategoryController } from './inventory_category.controller';

@Module({
  controllers: [InventoryCategoryController],
  providers: [InventoryCategoryService],
})
export class InventoryCategoryModule {}
