import { Controller, Post, Body, Get, Query, UseGuards, Req, HttpCode } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email: string;
    name: string;
  };
}



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  @Throttle({ default: { limit: 10, ttl: 60000 } }) // 10 requests per minute
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string) {
    return await this.authService.verifyEmail(token);
  }

  @Post('refresh')
  @HttpCode(200)
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return await this.authService.refreshToken(refreshToken);
  }

  @Post('logout')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: AuthenticatedRequest) {
    return await this.authService.logout(req?.user?.id);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
   getProfile(@Req() req: AuthenticatedRequest) {
    return {
      user: {
        id: req.user?.id,
        email: req.user?.email,
        name: req.user?.name,
      },
    };
  }
}