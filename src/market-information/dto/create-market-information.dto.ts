import {IsString} from 'class-validator';

export class CreateMarketInformationDto {
  @IsString()
  name: string;
  @IsString()
  description?: string;
}
