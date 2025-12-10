import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryManagementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createInventoryManagementDto: CreateInventoryManagementDto): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            minimum_stock_level_alert: number;
            unit: import(".prisma/client").$Enums.UnitType;
            cost_per_unit: number;
            supplier_name: string | null;
            supplier_contact: string | null;
            notes: string | null;
            categoryId: string;
        };
        status: number;
    } | undefined>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInventoryManagementDto: UpdateInventoryManagementDto): string;
    remove(id: number): string;
}
