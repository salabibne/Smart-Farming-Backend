import { Module } from '@nestjs/common';
import { MarketInformationService } from './market-information.service';
import { MarketInformationController } from './market-information.controller';

@Module({
  controllers: [MarketInformationController],
  providers: [MarketInformationService],
})
export class MarketInformationModule {}
