import { InventoryTransactionService } from './inventory-transaction.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
export declare class InventoryTransactionController {
    private readonly inventoryTransactionService;
    constructor(inventoryTransactionService: InventoryTransactionService);
    stockIn(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<{
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            inventoryId: string;
            stockType: import(".prisma/client").$Enums.StockType;
            purpose: import(".prisma/client").$Enums.PurposeType;
            transactionQuantity: number;
            stock: number;
            transactionDate: Date;
        };
        status: number;
    } | undefined>;
    stockOut(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            inventoryId: string;
            stockType: import(".prisma/client").$Enums.StockType;
            purpose: import(".prisma/client").$Enums.PurposeType;
            transactionQuantity: number;
            stock: number;
            transactionDate: Date;
        };
        status: number;
    } | undefined>;
    findAll(): Promise<{
        data: ({
            inventory: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            inventoryId: string;
            stockType: import(".prisma/client").$Enums.StockType;
            purpose: import(".prisma/client").$Enums.PurposeType;
            transactionQuantity: number;
            stock: number;
            transactionDate: Date;
        })[];
        message: string;
        status: number;
    }>;
    findOne(id: string): Promise<{
        data: ({
            inventory: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            inventoryId: string;
            stockType: import(".prisma/client").$Enums.StockType;
            purpose: import(".prisma/client").$Enums.PurposeType;
            transactionQuantity: number;
            stock: number;
            transactionDate: Date;
        })[];
        message: string;
        status: number;
    }>;
}
