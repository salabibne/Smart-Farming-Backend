import { InventoryTransactionService } from './inventory-transaction.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
export declare class InventoryTransactionController {
    private readonly inventoryTransactionService;
    constructor(inventoryTransactionService: InventoryTransactionService);
    stockIn(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<{
        id: string;
        inventoryId: string;
        stockType: import(".prisma/client").$Enums.StockType;
        purpose: import(".prisma/client").$Enums.PurposeType;
        transactionQuantity: number;
        stock: number;
        transactionDate: Date;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | undefined>;
    stockOut(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<{
        id: string;
        inventoryId: string;
        stockType: import(".prisma/client").$Enums.StockType;
        purpose: import(".prisma/client").$Enums.PurposeType;
        transactionQuantity: number;
        stock: number;
        transactionDate: Date;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | undefined>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInventoryTransactionDto: UpdateInventoryTransactionDto): string;
    remove(id: string): string;
}
