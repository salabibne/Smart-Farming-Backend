import { CreateInventoryCategoryDto } from './dto/create-inventory_category.dto';
import { UpdateInventoryCategoryDto } from './dto/update-inventory_category.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryCategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createInventoryCategoryDto: CreateInventoryCategoryDto): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            description: string | null;
        };
        status: number;
    }>;
    findAll(): Promise<{
        message: string;
        status: number;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            description: string | null;
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
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.StatusInventory;
            description: string | null;
        };
    }>;
    update(id: number, updateInventoryCategoryDto: UpdateInventoryCategoryDto): string;
    remove(id: number): string;
}
