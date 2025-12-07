import { PartialType } from '@nestjs/swagger';
import { CreateInventoryCategoryDto } from './create-inventory_category.dto';

export class UpdateInventoryCategoryDto extends PartialType(CreateInventoryCategoryDto) {}
