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
exports.FieldService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FieldService = class FieldService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createFieldDto, userId) {
        const field = await this.prisma.field.create({
            data: {
                ...createFieldDto,
                userId,
            },
        });
        return {
            message: 'Field created successfully',
            data: field,
            status: 201,
        };
    }
    async findAll(userId) {
        const fields = await this.prisma.field.findMany({
            where: {
                userId,
            },
        });
        return {
            message: 'Fields retrieved successfully',
            data: fields,
            status: 200,
        };
    }
    async findOne(id, userId) {
        const field = await this.prisma.field.findUnique({
            where: {
                id,
                userId,
            },
        });
        if (!field) {
            return {
                message: 'Field not found',
                status: 404,
            };
        }
        return {
            message: 'Field retrieved successfully',
            data: field,
            status: 200,
        };
    }
    async update(id, updateFieldDto, userId) {
        const field = await this.prisma.field.update({
            where: { id, userId },
            data: updateFieldDto,
        });
        return {
            message: 'Field updated successfully',
            data: field,
            status: 200,
        };
    }
    async remove(id, userId) {
        const field = await this.prisma.field.delete({ where: { id, userId } });
        if (!field) {
            return {
                message: 'Field not found',
            };
        }
        return {
            message: 'Field deleted successfully',
            status: 200,
        };
    }
};
exports.FieldService = FieldService;
exports.FieldService = FieldService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FieldService);
//# sourceMappingURL=field.service.js.map