export declare class User {
    id: string;
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    verificationToken: string | null;
    verificationTokenExpires: Date | null;
    refreshToken: string | null;
    createdAt: Date;
    updatedAt: Date;
}
