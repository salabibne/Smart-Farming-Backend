import { StockType, PurposeType } from '@prisma/client';
export declare class CreateInventoryTransactionDto {
    inventoryId: string;
    stockType: StockType;
    purpose: PurposeType;
    transactionQuantity: number;
    notes?: string;
}
