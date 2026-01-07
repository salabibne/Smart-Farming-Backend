import { CreateMarketInformationDto } from './dto/create-market-information.dto';
import { UpdateMarketInformationDto } from './dto/update-market-information.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class MarketInformationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMarketInformationDto: CreateMarketInformationDto): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        status: number;
    }>;
    findAll(): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        }[];
        status: number;
    }>;
    findOne(name: string): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        status: number;
    }>;
    update(id: string, updateMarketInformationDto: UpdateMarketInformationDto): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        status: number;
    }>;
    scrapedData(): Promise<{
        message: string;
        data: {
            name: string;
            id: number;
            category: string;
            category_id: string;
            weight: string;
            price: string;
            source: string;
            scraped_at: Date;
        }[];
        status: number;
        error?: undefined;
    } | {
        message: string;
        error: any;
        status: number;
        data?: undefined;
    }>;
    scrapedSingleProductCategory(name: string): Promise<{
        message: string;
        status: number;
        data?: undefined;
        error?: undefined;
    } | {
        message: string;
        data: {
            name: string;
            id: number;
            category: string;
            category_id: string;
            weight: string;
            price: string;
            source: string;
            scraped_at: Date;
        }[];
        status: number;
        error?: undefined;
    } | {
        message: string;
        error: any;
        status: number;
        data?: undefined;
    }>;
}
