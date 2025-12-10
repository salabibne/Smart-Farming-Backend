import { StockType, PurposeType } from '@prisma/client';
import {
 
  IsInt,
  IsEnum,
  IsOptional,

  IsString,
} from 'class-validator';



export class CreateInventoryTransactionDto {
  @IsString()
  inventoryId: string;

  @IsEnum(StockType)
  stockType: StockType;

  @IsEnum(PurposeType)
  purpose: PurposeType;

  @IsInt()
  transactionQuantity: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
