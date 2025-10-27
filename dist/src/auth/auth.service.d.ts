import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    private emailService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService, emailService: EmailService);
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
    logout(userId: string): Promise<{
        message: string;
    }>;
    private generateTokens;
}
