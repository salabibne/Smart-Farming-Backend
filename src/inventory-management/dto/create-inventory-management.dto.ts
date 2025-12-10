import {
  IsString,
  IsInt,
  IsEnum,
  IsOptional,
  IsNumber,
  IsUUID,
} from 'class-validator';
import { UnitType } from '@prisma/client';
enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}


export class CreateInventoryManagementDto {
  @IsString()
  name: string;


  @IsInt()
  minimum_stock_level_alert: number;

  @IsEnum(UnitType)
  unit: UnitType;

  @IsNumber()
  cost_per_unit: number;

  @IsOptional()
  @IsString()
  supplier_name?: string;

  @IsOptional()
  @IsString()
  supplier_contact?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsUUID()
  categoryId: string;
}
