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
exports.MarketInformationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MarketInformationService = class MarketInformationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMarketInformationDto) {
        const marketInfo = await this.prisma.productFromMarket.create({
            data: {
                ...createMarketInformationDto,
                name: createMarketInformationDto?.name?.toLowerCase(),
            },
        });
        return {
            message: 'Market information created successfully',
            data: marketInfo,
            status: 201,
        };
    }
    async findAll() {
        const marketInfo = await this.prisma.productFromMarket.findMany();
        return {
            message: 'Market information retrieved successfully',
            data: marketInfo,
            status: 200,
        };
    }
    async findOne(name) {
        const marketInfo = await this.prisma.productFromMarket.findFirst({
            where: { name: name.toLowerCase() },
        });
        if (!marketInfo) {
            return {
                message: 'Market information not found',
                status: 404,
            };
        }
        return {
            message: 'Market information retrieved successfully',
            data: marketInfo,
            status: 200,
        };
    }
    async update(id, updateMarketInformationDto) {
        const marketInfo = await this.prisma.productFromMarket.update({
            where: { id },
            data: updateMarketInformationDto,
        });
        if (!marketInfo) {
            return {
                message: 'Market information not found',
                status: 404,
            };
        }
        return {
            message: 'Market information updated successfully',
            data: marketInfo,
            status: 200,
        };
    }
    async scrapedData() {
        try {
            const marketInfo = await this.prisma.productpricefrommarket.findMany({
                orderBy: {
                    scraped_at: 'desc',
                }
            });
            return {
                message: 'Scraped market information retrieved successfully',
                data: marketInfo,
                status: 200,
            };
        }
        catch (error) {
            console.error('Error fetching scraped market data:', error);
            return {
                message: 'Failed to retrieve scraped market information',
                error: error?.message ?? 'Unknown error',
                status: 500,
            };
        }
    }
    async scrapedSingleProductCategory(name) {
        try {
            const marketInfo = await this.prisma.productpricefrommarket.findMany({
                where: { category: name.toLowerCase() },
                orderBy: {
                    scraped_at: 'desc',
                }
            });
            if (marketInfo.length === 0) {
                return {
                    message: 'Scraped market information not found',
                    status: 404,
                };
            }
            return {
                message: 'Scraped information retrieved successfully',
                data: marketInfo,
                status: 200,
            };
        }
        catch (error) {
            console.error('Error fetching scraped market data:', error);
            return {
                message: 'Failed to retrieve scraped market information',
                error: error?.message ?? 'Unknown error',
                status: 500,
            };
        }
    }
};
exports.MarketInformationService = MarketInformationService;
exports.MarketInformationService = MarketInformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MarketInformationService);
//# sourceMappingURL=market-information.service.js.map