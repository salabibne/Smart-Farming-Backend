import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryManagementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createInventoryManagementDto: CreateInventoryManagementDto, userId: string): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            categoryId: string;
            minimum_stock_level_alert: number;
            unit: import(".prisma/client").$Enums.UnitType;
            cost_per_unit: number;
            supplier_name: string | null;
            supplier_contact: string | null;
            notes: string | null;
            userId: string | null;
        };
        status: number;
    } | undefined>;
    findAll(userId: string): Promise<{
        message: string;
        status: number;
        data: ({
            category: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: import(".prisma/client").$Enums.StatusInventory;
                description: string | null;
            };
            transactions: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                notes: string | null;
                userId: string | null;
                inventoryId: string;
                stockType: import(".prisma/client").$Enums.StockType;
                transactionQuantity: number;
                transactionDate: Date;
                purpose: import(".prisma/client").$Enums.PurposeType;
                stock: number;
            }[];
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            categoryId: string;
            minimum_stock_level_alert: number;
            unit: import(".prisma/client").$Enums.UnitType;
            cost_per_unit: number;
            supplier_name: string | null;
            supplier_contact: string | null;
            notes: string | null;
            userId: string | null;
        })[];
        error?: undefined;
    } | {
        message: string;
        status: number;
        error: any;
        data?: undefined;
    }>;
    findOne(id: number): string;
    update(id: string, updateInventoryManagementDto: UpdateInventoryManagementDto, userId: string): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            categoryId: string;
            minimum_stock_level_alert: number;
            unit: import(".prisma/client").$Enums.UnitType;
            cost_per_unit: number;
            supplier_name: string | null;
            supplier_contact: string | null;
            notes: string | null;
            userId: string | null;
        };
        status: number;
    }>;
    remove(id: string): string;
}
