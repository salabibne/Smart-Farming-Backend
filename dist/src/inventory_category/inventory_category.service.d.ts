import { CreateInventoryCategoryDto } from './dto/create-inventory_category.dto';
import { UpdateInventoryCategoryDto } from './dto/update-inventory_category.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryCategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createInventoryCategoryDto: CreateInventoryCategoryDto): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            status: import(".prisma/client").$Enums.StatusInventory;
            createdAt: Date;
            updatedAt: Date;
        };
        status: number;
    }>;
    findAll(): Promise<{
        message: string;
        status: number;
        data: {
            id: string;
            name: string;
            description: string | null;
            status: import(".prisma/client").$Enums.StatusInventory;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        message: string;
        status: number;
        data: {
            id: string;
            name: string;
            description: string | null;
            status: import(".prisma/client").$Enums.StatusInventory;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    update(id: number, updateInventoryCategoryDto: UpdateInventoryCategoryDto): string;
    remove(id: number): string;
}
