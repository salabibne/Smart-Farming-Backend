import { UnitType } from '@prisma/client';
declare enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare class CreateInventoryManagementDto {
    name: string;
    minimum_stock_level_alert: number;
    unit: UnitType;
    cost_per_unit: number;
    supplier_name?: string;
    supplier_contact?: string;
    status?: Status;
    notes?: string;
    categoryId: string;
}
export {};
