import { Test, TestingModule } from '@nestjs/testing';
import { MarketInformationService } from './market-information.service';

describe('MarketInformationService', () => {
  let service: MarketInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketInformationService],
    }).compile();

    service = module.get<MarketInformationService>(MarketInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
