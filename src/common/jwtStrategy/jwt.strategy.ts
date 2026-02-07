
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../users/users.service';


export interface JwtPayload {
  sub: string; // user ID
  email: string; // user email  
  iat?: number; // issued at
  exp?: number; // expiration time  
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') ?? '',
        });
    }
    
    async validate(payload: JwtPayload) {
        const user = await this.userService.findById(payload.sub);
        console.log('JWT Strategy payload:', payload);
        if(!user || !user.isVerified) {
            return null; // or throw an UnauthorizedException
        }
        console.log('JWT Strategy validated user:', user);
        return user

    }
}