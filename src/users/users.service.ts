import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../auth/auth.dto';
import * as crypto from 'crypto';



@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new user
  async create(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.users.findUnique({
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

    // Create user
    const user = await this.prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        name,
        verificationToken,
        verificationTokenExpires,
      },
    });

    return user;
  }

  // Find by email
  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({ where: { email } });
  }

  // Find by ID
  async findById(id: string) {
    return await this.prisma.users.findUnique({ where: { id } });
  }

  // Verify email
  async verifyEmail(token: string) {
    const user = await this.prisma.users.findFirst({
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

    return await this.prisma.users.update({
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
    await this.prisma.users.update({
      where: { id: userId },
      data: { refreshToken: hashedRefreshToken },
    });
  }

  // Remove refresh token
  async removeRefreshToken(userId: string): Promise<void> {
    await this.prisma.users.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  // Helper: generate email verification token
  private generateVerificationToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}
