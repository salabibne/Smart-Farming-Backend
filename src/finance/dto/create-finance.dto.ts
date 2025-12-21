import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsDateString,
  Min,
} from 'class-validator';

import {
  TransactionType,
  TransactionCategory,
  paymentMethod,
} from '@prisma/client';

export class CreateFinanceDto {
  @IsNumber()
  @Min(0)
  amount: number;

  @IsEnum(TransactionType)
  transactionType: TransactionType;

  @IsEnum(TransactionCategory)
  transactionCategory: TransactionCategory;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsEnum(paymentMethod)
  paymentMethod?: paymentMethod;

  @IsNotEmpty()
  @IsString()
  transactionId: string;
  
  @IsOptional()
  @IsString()
  inventoryId: string;
}
