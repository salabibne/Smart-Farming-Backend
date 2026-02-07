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
import { FieldService } from './field.service';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import  { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';


@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createFieldDto: CreateFieldDto,
    @CurrentUser('userId') userId: string,
  ) {
    return this.fieldService.create(createFieldDto, userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser('userId') userId: string) {
    return this.fieldService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string, @CurrentUser('userId') userId: string) {
    return this.fieldService.findOne(id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateFieldDto: UpdateFieldDto, @CurrentUser('userId') userId: string) {
    return this.fieldService.update(id, updateFieldDto, userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @CurrentUser('userId') userId: string) {
    return this.fieldService.remove(id, userId );
  }
}
