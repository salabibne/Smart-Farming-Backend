import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../users/users.service';
export interface JwtPayload {
    sub: string;
    email: string;
    iat?: number;
    exp?: number;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(payload: JwtPayload): Promise<{
        email: string;
        password: string;
        name: string;
        id: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
export {};
