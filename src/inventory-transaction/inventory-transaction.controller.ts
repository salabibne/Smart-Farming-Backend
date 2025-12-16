import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryTransactionService } from './inventory-transaction.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';

@Controller('inventory-transaction')
export class InventoryTransactionController {
  constructor(private readonly inventoryTransactionService: InventoryTransactionService) {}

  @Post('stock-in')
  stockIn(@Body() createInventoryTransactionDto: CreateInventoryTransactionDto) {
    return this.inventoryTransactionService.stockIn(createInventoryTransactionDto);
  }

  @Post('stock-out')
  stockOut(@Body() createInventoryTransactionDto: CreateInventoryTransactionDto) {
    return this.inventoryTransactionService.stockOut(createInventoryTransactionDto);
  }

  @Get()
  findAll() {
    return this.inventoryTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryTransactionService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateInventoryTransactionDto: UpdateInventoryTransactionDto) {
  //   return this.inventoryTransactionService.update(+id, updateInventoryTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.inventoryTransactionService.remove(id);
  // }
}
