import { Injectable } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) {}
  async create(createFieldDto: CreateFieldDto, userId: string) {
   const field = await this.prisma.field.create({
     data: {
       ...createFieldDto,
       userId,
     },
   });
   return {
    message: 'Field created successfully',
    data: field,
    status: 201,
   };
  }

  async findAll(userId: string) {
   const fields =  await this.prisma.field.findMany({
     where: {
       userId,
     },
   });
   return {
    message: 'Fields retrieved successfully',
    data: fields,
    status: 200,
   };
  }

  async findOne(id: string, userId: string) {
    const field = await this.prisma.field.findUnique({
      where: {
        id,
        userId,
      },
    });
    if (!field) {
      return {
        message: 'Field not found',
        status: 404,
      };
    }
    return {
      message: 'Field retrieved successfully',
      data: field,
      status: 200,
    };
  }

 async  update(id:string, updateFieldDto: UpdateFieldDto, userId: string) {
    const field = await this.prisma.field.update({
      where: { id, userId },
      data: updateFieldDto,
    });
    return {
      message: 'Field updated successfully',
      data: field,
      status: 200,
    };
  }

  async remove(id: string, userId: string) {
    const field = await this.prisma.field.delete({ where: { id, userId } });
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
