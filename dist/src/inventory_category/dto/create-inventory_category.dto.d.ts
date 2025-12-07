declare enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare class CreateInventoryCategoryDto {
    name: string;
    status?: Status;
    description?: string;
}
export {};
