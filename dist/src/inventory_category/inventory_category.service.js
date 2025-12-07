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
exports.InventoryCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryCategoryService = class InventoryCategoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInventoryCategoryDto) {
        const category = await this.prisma.inventoryCategory.create({
            data: createInventoryCategoryDto,
        });
        return {
            message: 'Inventory category created successfully',
            data: category,
            status: 201,
        };
    }
    async findAll() {
        const categories = await this.prisma.inventoryCategory.findMany();
        return {
            message: 'Inventory categories retrieved successfully',
            status: 200,
            data: categories,
        };
    }
    async findOne(id) {
        const category = await this.prisma.inventoryCategory.findUnique({
            where: { id },
        });
        if (!category) {
            return {
                message: 'Inventory category not found',
                status: 404,
            };
        }
        return {
            message: 'Inventory category retrieved successfully',
            status: 200,
            data: category,
        };
    }
    update(id, updateInventoryCategoryDto) {
        return `This action updates a #${id} inventoryCategory`;
    }
    remove(id) {
        return `This action removes a #${id} inventoryCategory`;
    }
};
exports.InventoryCategoryService = InventoryCategoryService;
exports.InventoryCategoryService = InventoryCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryCategoryService);
//# sourceMappingURL=inventory_category.service.js.map