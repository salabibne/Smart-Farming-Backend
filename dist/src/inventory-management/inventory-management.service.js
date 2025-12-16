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
exports.InventoryManagementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryManagementService = class InventoryManagementService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInventoryManagementDto) {
        const inventory = await this.prisma.inventoryManagement.create({
            data: createInventoryManagementDto,
        });
        const stockEntry = await this.prisma.inventoryTransaction.create({
            data: {
                inventoryId: inventory.id,
                stockType: 'IN',
                purpose: 'INITIATE_STOCK',
                transactionQuantity: 0,
                stock: 0,
            },
        });
        if (inventory && stockEntry) {
            return {
                message: 'Inventory created successfully',
                data: inventory,
                status: 201,
            };
        }
    }
    async findAll() {
        try {
            const inventoriesItems = await this.prisma.inventoryManagement.findMany({
                include: {
                    category: true,
                    transactions: {
                        orderBy: { createdAt: 'desc' },
                        take: 1,
                    },
                },
            });
            return {
                message: 'Inventory items retrieved successfully',
                status: 200,
                data: inventoriesItems,
            };
        }
        catch (error) {
            return {
                message: 'Error retrieving inventory items',
                status: 500,
                error: error.message,
            };
        }
    }
    findOne(id) {
        return `This action returns a #${id} inventoryManagement`;
    }
    async update(id, updateInventoryManagementDto) {
        const item = await this.prisma.inventoryManagement.findUnique({
            where: { id },
        });
        if (!item) {
            return {
                message: 'Inventory item not found',
                status: 404,
            };
        }
        const updatedItem = await this.prisma.inventoryManagement.update({
            where: { id },
            data: updateInventoryManagementDto,
        });
        return {
            message: 'Inventory item updated successfully',
            data: updatedItem,
            status: 200,
        };
    }
    remove(id) {
        return `This action removes a #${id} inventoryManagement`;
    }
};
exports.InventoryManagementService = InventoryManagementService;
exports.InventoryManagementService = InventoryManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryManagementService);
//# sourceMappingURL=inventory-management.service.js.map