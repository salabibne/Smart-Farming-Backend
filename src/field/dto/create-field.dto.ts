import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  
  Min,
  Max,
} from 'class-validator';

export class CreateFieldDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @Min(0)
  size_Square_Meter: number;

  @IsString()
 
 
  imageURL: string;

  @IsNumber()
  @Min(0)
  N: number;

  @IsNumber()
  @Min(0)
  P: number;

  @IsNumber()
  @Min(0)
  K: number;

  @IsNumber()
  @Min(0)
  @Max(14)
  pH: number;
}
