import { TransactionType, TransactionCategory, paymentMethod } from '@prisma/client';
export declare class CreateFinanceDto {
    amount: number;
    transactionType: TransactionType;
    transactionCategory: TransactionCategory;
    notes?: string;
    paymentMethod?: paymentMethod;
    transactionId: string;
    inventoryId: string;
}
