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
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            inventoryId: string | null;
            transactionDate: Date;
            amount: number;
            transactionType: import(".prisma/client").$Enums.TransactionType;
            transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
            paymentMethod: import(".prisma/client").$Enums.paymentMethod;
            transactionId: string;
        };
    }>;
    findAll(): Promise<({
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        inventoryId: string | null;
        transactionDate: Date;
        amount: number;
        transactionType: import(".prisma/client").$Enums.TransactionType;
        transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
        paymentMethod: import(".prisma/client").$Enums.paymentMethod;
        transactionId: string;
    })[]>;
    calculateNetBalance(): Promise<{
        totalIncome: number;
        totalExpense: number;
        netBalance: number;
    }>;
    findByCategory(category: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        inventoryId: string | null;
        transactionDate: Date;
        amount: number;
        transactionType: import(".prisma/client").$Enums.TransactionType;
        transactionCategory: import(".prisma/client").$Enums.TransactionCategory;
        paymentMethod: import(".prisma/client").$Enums.paymentMethod;
        transactionId: string;
    }[]>;
}
