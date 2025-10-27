import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/auth.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(registerDto: RegisterDto): Promise<{
        email: string;
        password: string;
        name: string;
        id: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        name: string;
        id: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        email: string;
        password: string;
        name: string;
        id: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    verifyEmail(token: string): Promise<{
        email: string;
        password: string;
        name: string;
        id: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    removeRefreshToken(userId: string): Promise<void>;
    private generateVerificationToken;
}
