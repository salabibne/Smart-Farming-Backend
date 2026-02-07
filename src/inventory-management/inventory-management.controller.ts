import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { InventoryManagementService } from './inventory-management.service';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import  { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('inventory-management')
export class InventoryManagementController {
  constructor(
    private readonly inventoryManagementService: InventoryManagementService,
  ) {}

  // @Post()
  // create(@Body() createInventoryManagementDto: CreateInventoryManagementDto) {
  //   return this.inventoryManagementService.create(createInventoryManagementDto);
  // }
  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createInventoryManagementDto: CreateInventoryManagementDto,
    @CurrentUser('userId') userId: string,
  ) {
    console.log('User from JWT:', userId);
    return this.inventoryManagementService.create(
      createInventoryManagementDto,
      userId,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser('userId') userId: string) {
    return this.inventoryManagementService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryManagementService.findOne(+id);
  }

  @Patch('/update/:id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateInventoryManagementDto: UpdateInventoryManagementDto,
    @CurrentUser('userId') userId: string
  ) {
    return this.inventoryManagementService.update(
      id,
      updateInventoryManagementDto,
      userId
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryManagementService.remove(id);
  }
}
