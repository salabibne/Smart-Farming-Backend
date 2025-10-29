// this user service handles user related operations such as creating a user, finding by email or id, verifying email, and managing refresh tokens.

import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../auth/auth.dto';
import * as crypto from 'crypto';
import { Role } from '@prisma/client';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new user
  async create(registerDto: RegisterDto) {
    const { email, password, name , address} = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate verification token
    const verificationToken = this.generateVerificationToken();
    const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user in database 
    // here user first created , then profile created 

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
            role: Role.USER,
            //store address as a json
            address: address ? instanceToPlain(address) : {},
          },
        },
      },
      // include profile in the returned user
      include: { profile: true },
    });

    return user;
  }

  // Find by email
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  // Find by ID
  async findById(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  // Verify email
  async verifyEmail(token: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        verificationToken: token,
        verificationTokenExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new NotFoundException('Invalid or expired verification token');
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

  // Update refresh token
  async updateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedRefreshToken },
    });
  }

  // Remove refresh token
  async removeRefreshToken(userId: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  // Helper: generate email verification token
  private generateVerificationToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}
