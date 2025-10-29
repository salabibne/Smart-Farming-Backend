import { IsEmail,IsString,MinLength,IsNotEmpty,ValidateNested } from "class-validator";
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  district: string;
  @IsString()
  sub_district: string;
  @IsString()
  thana: string;
}
export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
 @IsNotEmpty()
  password: string;
}

export class VerificationDto{
    @IsString()
    @IsNotEmpty()
    token: string;

}
