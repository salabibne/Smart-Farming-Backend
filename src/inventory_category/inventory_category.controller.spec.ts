import { Test, TestingModule } from '@nestjs/testing';
import { InventoryCategoryController } from './inventory_category.controller';
import { InventoryCategoryService } from './inventory_category.service';

describe('InventoryCategoryController', () => {
  let controller: InventoryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryCategoryController],
      providers: [InventoryCategoryService],
    }).compile();

    controller = module.get<InventoryCategoryController>(InventoryCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
