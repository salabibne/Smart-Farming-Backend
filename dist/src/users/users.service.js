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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(registerDto) {
        const { email, password, name, address } = registerDto;
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationToken = this.generateVerificationToken();
        const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                verificationToken,
                verificationTokenExpires,
                profile: {
                    create: {
                        bio: 'This is my bio',
                        role: client_1.Role.USER,
                        address: address ? (0, class_transformer_1.instanceToPlain)(address) : {},
                    },
                },
            },
            include: { profile: true },
        });
        return user;
    }
    async findByEmail(email) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async findById(id) {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async verifyEmail(token) {
        const user = await this.prisma.user.findFirst({
            where: {
                verificationToken: token,
                verificationTokenExpires: {
                    gt: new Date(),
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('Invalid or expired verification token');
        }
        return await this.prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                verificationToken: null,
                verificationTokenExpires: null,
            },
        });
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: hashedRefreshToken },
        });
    }
    async removeRefreshToken(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
    }
    generateVerificationToken() {
        return crypto.randomBytes(32).toString('hex');
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=users.service.js.map