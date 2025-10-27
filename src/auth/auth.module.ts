import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { JwtStrategy } from '../common/jwtStrategy/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule, // Provides PrismaService globally
    PassportModule,
    JwtModule.register({}),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, EmailService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
