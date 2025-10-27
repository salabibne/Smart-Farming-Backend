import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { RegisterDto, LoginDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private emailService: EmailService,
  ) {}

  // Register new user
  async register(registerDto: RegisterDto) {
    const user = await this.userService.create(registerDto);

    if (!user.verificationToken) {
      throw new BadRequestException('Verification token was not generated.');
    }

    await this.emailService.sendVerificationEmail(
      user.email,
      user.verificationToken,
      user.name,
    );

    return {
      message:
        'Registration successful. Please check your email to verify your account.',
      email: user.email,
    };
  }

  // Login user
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isVerified) {
      throw new UnauthorizedException(
        'Please verify your email before logging in',
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
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

  // Verify email
  async verifyEmail(token: string) {
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
    } catch (error) {
      throw new BadRequestException('Invalid or expired verification token');
    }
  }

  // Refresh JWT token
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify<{ sub: string; email: string }>(
        refreshToken,
        {
          secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        },
      );

      const user = await this.userService.findById(payload.sub);
      if (!user || !user.refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const isRefreshTokenValid = await bcrypt.compare(
        refreshToken,
        user.refreshToken,
      );
      if (!isRefreshTokenValid) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const tokens = await this.generateTokens(user);
      await this.userService.updateRefreshToken(user.id, tokens.refreshToken);

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  // Logout user
  async logout(userId: string) {
    await this.userService.removeRefreshToken(userId);
    return { message: 'Logged out successfully' };
  }

  // Generate JWT access and refresh tokens
  private async generateTokens(user: { id: string; email: string }) {
    const payload = { sub: user.id, email: user.email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN'),
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
