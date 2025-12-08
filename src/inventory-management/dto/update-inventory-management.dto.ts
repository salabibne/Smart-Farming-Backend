import { PartialType } from '@nestjs/swagger';
import { CreateInventoryManagementDto } from './create-inventory-management.dto';

export class UpdateInventoryManagementDto extends PartialType(CreateInventoryManagementDto) {}
