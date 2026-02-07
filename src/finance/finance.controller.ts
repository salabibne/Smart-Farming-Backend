import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FinanceService } from './finance.service';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createFinanceDto: CreateFinanceDto,
    @CurrentUser('userId') userId: string,
  ) {
    return this.financeService.create(createFinanceDto, userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser('userId') userId: string) {
    return this.financeService.findAll(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.financeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFinanceDto: UpdateFinanceDto) {
  //   return this.financeService.update(+id, updateFinanceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.financeService.remove(+id);
  // }

  @Get('net-balance')
  @UseGuards(JwtAuthGuard)
  calculateNetBalance(@CurrentUser('userId') userId: string) {
    return this.financeService.calculateNetBalance(userId);
  }

  @Get('category/:category')
  @UseGuards(JwtAuthGuard)
  findByCategory(@Param('category') category: string, @CurrentUser('userId') userId: string) {
    return this.financeService.findByCategory(category, userId);
  }

  @Get('dashboard/kpi')
  @UseGuards(JwtAuthGuard)
  getDashboardKPIs(@CurrentUser('userId') userId: string, @Query('from') from?: string, @Query('to') to?: string) {
    return this.financeService.getDashboardKPIs(userId, from, to);
  }
}
