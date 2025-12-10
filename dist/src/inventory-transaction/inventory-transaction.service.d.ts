import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryTransactionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): string;
    update(id: number, updateInventoryTransactionDto: UpdateInventoryTransactionDto): string;
    remove(id: number): string;
}
