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
    async stockIn(createInventoryTransactionDto) {
        try {
            const item = await this.prisma.inventoryTransaction.findFirst({
                where: { inventoryId: createInventoryTransactionDto.inventoryId },
                orderBy: { createdAt: 'desc' },
            });
            if (createInventoryTransactionDto.stockType === 'IN') {
                const newStock = (item?.stock ?? 0) +
                    createInventoryTransactionDto.transactionQuantity;
                return await this.prisma.inventoryTransaction.create({
                    data: {
                        ...createInventoryTransactionDto,
                        stock: newStock,
                    },
                });
            }
        }
        catch (error) {
            console.error('Stock IN Error:', error);
            throw new common_1.InternalServerErrorException('Failed to process stock IN');
        }
    }
    async stockOut(createInventoryTransactionDto) {
        try {
            const item = await this.prisma.inventoryTransaction.findFirst({
                where: { inventoryId: createInventoryTransactionDto.inventoryId },
                orderBy: { createdAt: 'desc' },
            });
            if (createInventoryTransactionDto.stockType === 'OUT') {
                const newStock = (item?.stock ?? 0) -
                    createInventoryTransactionDto.transactionQuantity;
                if (newStock < 0) {
                    throw new common_1.BadRequestException('Insufficient stock for this transaction');
                }
                const minimumStockThreshold = await this.prisma.inventoryManagement.findFirst({
                    where: { id: createInventoryTransactionDto.inventoryId },
                    select: { minimum_stock_level_alert: true },
                });
                if (minimumStockThreshold &&
                    newStock <= minimumStockThreshold.minimum_stock_level_alert) {
                    return await this.prisma.inventoryTransaction.create({
                        data: {
                            ...createInventoryTransactionDto,
                            stock: newStock,
                            notes: `Alert: Stock has fallen below the minimum threshold of ${minimumStockThreshold.minimum_stock_level_alert}. Current stock is ${newStock}.`
                        },
                    });
                }
                return await this.prisma.inventoryTransaction.create({
                    data: {
                        ...createInventoryTransactionDto,
                        stock: newStock,
                    },
                });
            }
        }
        catch (error) {
            console.error('Stock OUT Error:', error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to process stock OUT');
        }
    }
    findAll() {
        return `This action returns all inventoryTransaction`;
    }
    findOne(id) {
        return `This action returns a #${id} inventoryTransaction`;
    }
    update(id, updateInventoryTransactionDto) {
        return `This action updates a #${id} inventoryTransaction`;
    }
    remove(id) {
        return `This action removes a #${id} inventoryTransaction`;
    }
};
exports.InventoryTransactionService = InventoryTransactionService;
exports.InventoryTransactionService = InventoryTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryTransactionService);
//# sourceMappingURL=inventory-transaction.service.js.map