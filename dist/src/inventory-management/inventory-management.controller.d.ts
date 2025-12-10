import { InventoryManagementService } from './inventory-management.service';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
export declare class InventoryManagementController {
    private readonly inventoryManagementService;
    constructor(inventoryManagementService: InventoryManagementService);
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
    findOne(id: string): string;
    update(id: string, updateInventoryManagementDto: UpdateInventoryManagementDto): string;
    remove(id: string): string;
}
