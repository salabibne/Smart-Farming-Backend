"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
const email_service_1 = require("../email/email.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    userService;
    jwtService;
    configService;
    emailService;
    constructor(userService, jwtService, configService, emailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
    }
    async register(registerDto) {
        const user = await this.userService.create(registerDto);
        if (!user.verificationToken) {
            throw new common_1.BadRequestException('Verification token was not generated.');
        }
        await this.emailService.sendVerificationEmail(user.email, user.verificationToken, user.name);
        return {
            message: 'Registration successful. Please check your email to verify your account.',
            email: user.email,
        };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isVerified) {
            throw new common_1.UnauthorizedException('Please verify your email before logging in');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const tokens = await this.generateTokens(user);
        await this.userService.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            ...tokens,
        };
    }
    async verifyEmail(token) {
        try {
            const user = await this.userService.verifyEmail(token);
            return {
                message: 'Email verified successfully. You can now log in.',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                },
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid or expired verification token');
        }
    }
    async refreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            });
            const user = await this.userService.findById(payload.sub);
            if (!user || !user.refreshToken) {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const isRefreshTokenValid = await bcrypt.compare(refreshToken, user.refreshToken);
            if (!isRefreshTokenValid) {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const tokens = await this.generateTokens(user);
            await this.userService.updateRefreshToken(user.id, tokens.refreshToken);
            return tokens;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async logout(userId) {
        await this.userService.removeRefreshToken(userId);
        return { message: 'Logged out successfully' };
    }
    async generateTokens(user) {
        const payload = { sub: user.id, email: user.email };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRES_IN'),
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
                expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRES_IN'),
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map