import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
import { Request } from 'express';
interface AuthenticatedRequest extends Request {
    user: {
        id: string;
        email: string;
        name: string;
    };
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        email: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    verifyEmail(token: string): Promise<{
        message: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(req: AuthenticatedRequest): Promise<{
        message: string;
    }>;
    getProfile(req: AuthenticatedRequest): {
        user: {
            id: string;
            email: string;
            name: string;
        };
    };
}
export {};
