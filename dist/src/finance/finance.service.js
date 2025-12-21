"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let FinanceService = class FinanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createFinanceDto) {
        const { inventoryId, amount, ...rest } = createFinanceDto;
        const linkedInventoryId = inventoryId && inventoryId.trim() !== '' ? inventoryId : null;
        try {
            const finance = await this.prisma.finnace.create({
                data: {
                    ...rest,
                    amount: Number(amount),
                    inventoryId: linkedInventoryId,
                },
                include: {
                    inventory: true,
                },
            });
            return {
                message: 'Transaction recorded successfully',
                status: 201,
                data: finance,
            };
        }
        catch (error) {
            if (error.code === 'P2003') {
                throw new common_1.BadRequestException('The provided Inventory ID does not exist.');
            }
            throw error;
        }
    }
    async findAll() {
        return this.prisma.finnace.findMany({
            orderBy: {
                transactionDate: 'desc',
            },
            include: {
                inventory: true,
            },
        });
    }
    async calculateNetBalance() {
        const incomeResult = await this.prisma.finnace.aggregate({
            _sum: { amount: true },
            where: { transactionType: client_1.TransactionType.INCOME },
        });
        const totalIncome = incomeResult._sum.amount || 0;
        const expenseResult = await this.prisma.finnace.aggregate({
            _sum: { amount: true },
            where: { transactionType: client_1.TransactionType.EXPENSE },
        });
        const totalExpense = expenseResult._sum.amount || 0;
        const netBalance = totalIncome - totalExpense;
        return {
            totalIncome,
            totalExpense,
            netBalance,
        };
    }
    async findByCategory(category) {
        console.log('Catch');
        return this.prisma.finnace.findMany({
            where: {
                transactionCategory: category,
            },
            orderBy: {
                transactionDate: 'desc',
            },
        });
    }
};
exports.FinanceService = FinanceService;
exports.FinanceService = FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FinanceService);
//# sourceMappingURL=finance.service.js.map