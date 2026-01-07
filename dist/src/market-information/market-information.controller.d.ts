import { MarketInformationService } from './market-information.service';
import { CreateMarketInformationDto } from './dto/create-market-information.dto';
import { UpdateMarketInformationDto } from './dto/update-market-information.dto';
export declare class MarketInformationController {
    private readonly marketInformationService;
    constructor(marketInformationService: MarketInformationService);
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
    scrapedOneProduct(name: string): Promise<{
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
}
