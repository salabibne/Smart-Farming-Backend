import { Injectable } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) {}
  async create(createFieldDto: CreateFieldDto) {
   const field = await this.prisma.field.create({ data: createFieldDto });
   return {
    message: 'Field created successfully',
    data: field,
    status: 201,
   };
  }

  async findAll() {
   const fields =  await this.prisma.field.findMany();
   return {
    message: 'Fields retrieved successfully',
    data: fields,
    status: 200,
   };
  }

  findOne(id: string) {
    return `This action returns a #${id} field`;
  }

 async  update(id:string, updateFieldDto: UpdateFieldDto) {
    const field = await this.prisma.field.update({
      where: { id },
      data: updateFieldDto,
    });
    return {
      message: 'Field updated successfully',
      data: field,
      status: 200,
    };
  }

  async remove(id: string) {
    const field = await this.prisma.field.delete({ where: { id } });
    if (!field) {
      return {
        message: 'Field not found',
      }
    }
    
    return {
      message: 'Field deleted successfully',
      status: 200,
    };
  }
}
