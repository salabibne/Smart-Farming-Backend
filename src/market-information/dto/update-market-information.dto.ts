import { PartialType } from '@nestjs/swagger';
import { CreateMarketInformationDto } from './create-market-information.dto';

export class UpdateMarketInformationDto extends PartialType(CreateMarketInformationDto) {}
