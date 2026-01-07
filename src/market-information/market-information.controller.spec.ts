import { Test, TestingModule } from '@nestjs/testing';
import { MarketInformationController } from './market-information.controller';
import { MarketInformationService } from './market-information.service';

describe('MarketInformationController', () => {
  let controller: MarketInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketInformationController],
      providers: [MarketInformationService],
    }).compile();

    controller = module.get<MarketInformationController>(MarketInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
