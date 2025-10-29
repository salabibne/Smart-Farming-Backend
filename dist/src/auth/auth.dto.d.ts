declare class AddressDto {
    district: string;
    sub_district: string;
    thana: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    name: string;
    address?: AddressDto;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class VerificationDto {
    token: string;
}
export {};
