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
exports.InventoryTransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryTransactionService = class InventoryTransactionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async stockIn(createDto, userId) {
        const inventory = await this.prisma.inventoryManagement.findFirst({
            where: { id: createDto.inventoryId, userId },
        });
        if (!inventory) {
            throw new common_1.BadRequestException('Inventory not found or you do not have access to it.');
        }
        const lastTransaction = await this.prisma.inventoryTransaction.findFirst({
            where: { inventoryId: createDto.inventoryId },
            orderBy: { createdAt: 'desc' },
        });
        const newStock = (lastTransaction?.stock ?? 0) + createDto.transactionQuantity;
        const transaction = await this.prisma.inventoryTransaction.create({
            data: {
                ...createDto,
                stock: newStock,
                userId
            },
        });
        return {
            message: 'Stock IN processed successfully',
            data: transaction,
            status: 201,
        };
    }
    async stockOut(createDto, userId) {
        const inventory = await this.prisma.inventoryManagement.findFirst({
            where: { id: createDto.inventoryId, userId },
        });
        if (!inventory) {
            throw new common_1.BadRequestException('Inventory not found or you do not have access to it.');
        }
        const lastTransaction = await this.prisma.inventoryTransaction.findFirst({
            where: { inventoryId: createDto.inventoryId },
            orderBy: { createdAt: 'desc' },
        });
        const newStock = (lastTransaction?.stock ?? 0) - createDto.transactionQuantity;
        if (newStock < 0) {
            throw new common_1.BadRequestException('Insufficient stock for this transaction');
        }
        const transactionData = {
            ...createDto,
            stock: newStock,
            userId
        };
        const transaction = await this.prisma.inventoryTransaction.create({
            data: transactionData,
        });
        const lowStockAlert = newStock <= inventory.minimum_stock_level_alert ? true : false;
        return {
            message: lowStockAlert
                ? 'Stock OUT processed with low stock alert'
                : 'Stock OUT processed successfully',
            data: transaction,
            status: 201,
        };
    }
    async findAll(userId) {
        const transactions = await this.prisma.inventoryTransaction.findMany({
            where: { inventory: { userId } },
            orderBy: { createdAt: 'desc' },
            include: { inventory: true },
        });
        return {
            data: transactions,
            message: 'Transactions retrieved successfully',
            status: 200,
        };
    }
    async findOne(inventoryId, userId) {
        const inventory = await this.prisma.inventoryManagement.findFirst({
            where: { id: inventoryId, userId },
        });
        if (!inventory) {
            throw new common_1.BadRequestException('Inventory not found or you do not have access to it.');
        }
        const transactions = await this.prisma.inventoryTransaction.findMany({
            where: { inventoryId },
            orderBy: { createdAt: 'desc' },
            include: { inventory: true },
        });
        return {
            data: transactions,
            message: 'Transactions retrieved successfully',
            status: 200,
        };
    }
};
exports.InventoryTransactionService = InventoryTransactionService;
exports.InventoryTransactionService = InventoryTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryTransactionService);
//# sourceMappingURL=inventory-transaction.service.js.map