import { FinanceService } from './finance.service';
import { CreateFinanceDto } from './dto/create-finance.dto';
export declare class FinanceController {
    private readonly financeService;
    constructor(financeService: FinanceService);
    create(createFinanceDto: CreateFinanceDto): Promise<{
        message: string;
        status: number;
        data: {
            inventory: {
                id: string;
                notes: string | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                minimum_stock_level_alert: number;
                unit: import(".prisma/client").$Enums.UnitType;
                cost_per_unit: number;
                supplier_name: string | null;
                supplier_contact: string | null;
                status: import(".prisma/client").$Enums.StatusInventory;
                categoryId: string;
            } | null;
        } & {
            id: string;
            amount: number;
            transactionType: import(".prisma/client").$Enums.TransactionType;
            transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
            notes: string | null;
            paymentMethod: import(".prisma/client").$Enums.paymentMethod;
            transactionId: string;
            inventoryId: string | null;
            transactionDate: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<({
        inventory: {
            id: string;
            notes: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            minimum_stock_level_alert: number;
            unit: import(".prisma/client").$Enums.UnitType;
            cost_per_unit: number;
            supplier_name: string | null;
            supplier_contact: string | null;
            status: import(".prisma/client").$Enums.StatusInventory;
            categoryId: string;
        } | null;
    } & {
        id: string;
        amount: number;
        transactionType: import(".prisma/client").$Enums.TransactionType;
        transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
        notes: string | null;
        paymentMethod: import(".prisma/client").$Enums.paymentMethod;
        transactionId: string;
        inventoryId: string | null;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    calculateNetBalance(): Promise<{
        totalIncome: number;
        totalExpense: number;
        netBalance: number;
    }>;
    findByCategory(category: string): Promise<{
        id: string;
        amount: number;
        transactionType: import(".prisma/client").$Enums.TransactionType;
        transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
        notes: string | null;
        paymentMethod: import(".prisma/client").$Enums.paymentMethod;
        transactionId: string;
        inventoryId: string | null;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
