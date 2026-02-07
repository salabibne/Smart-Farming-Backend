import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InventoryTransactionService } from './inventory-transaction.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('inventory-transaction')
export class InventoryTransactionController {
  constructor(
    private readonly inventoryTransactionService: InventoryTransactionService,
  ) {}

  @Post('stock-in')
  @UseGuards(JwtAuthGuard)
  stockIn(
    @Body() createInventoryTransactionDto: CreateInventoryTransactionDto,
    @CurrentUser('userId') userId: string,
  ) {
    return this.inventoryTransactionService.stockIn(
      createInventoryTransactionDto,
      userId,
    );
  }

  @Post('stock-out')
  @UseGuards(JwtAuthGuard)
  stockOut(
    @Body() createInventoryTransactionDto: CreateInventoryTransactionDto,
    @CurrentUser('userId') userId: string,
  ) {
    return this.inventoryTransactionService.stockOut(
      createInventoryTransactionDto,
      userId
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser('userId') userId: string) {
    return this.inventoryTransactionService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string, @CurrentUser('userId') userId: string) {
    return this.inventoryTransactionService.findOne(id, userId);
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
