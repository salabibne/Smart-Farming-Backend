import { FieldService } from './field.service';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
export declare class FieldController {
    private readonly fieldService;
    constructor(fieldService: FieldService);
    create(createFieldDto: CreateFieldDto, userId: string): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            location: string;
            size_Square_Meter: number;
            imageURL: string;
            N: number;
            P: number;
            K: number;
            pH: number;
        };
        status: number;
    }>;
    findAll(userId: string): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            location: string;
            size_Square_Meter: number;
            imageURL: string;
            N: number;
            P: number;
            K: number;
            pH: number;
        }[];
        status: number;
    }>;
    findOne(id: string, userId: string): Promise<{
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
            userId: string;
            location: string;
            size_Square_Meter: number;
            imageURL: string;
            N: number;
            P: number;
            K: number;
            pH: number;
        };
        status: number;
    }>;
    update(id: string, updateFieldDto: UpdateFieldDto, userId: string): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            location: string;
            size_Square_Meter: number;
            imageURL: string;
            N: number;
            P: number;
            K: number;
            pH: number;
        };
        status: number;
    }>;
    remove(id: string, userId: string): Promise<{
        message: string;
        status?: undefined;
    } | {
        message: string;
        status: number;
    }>;
}
