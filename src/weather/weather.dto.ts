import { IsEmail,IsString,MinLength,IsNotEmpty,ValidateNested, IsNumber, IsNumberString } from "class-validator";

export class WeatherDto {
  // Default coordinates set to Dhaka, Bangladesh

  @IsNumberString()
  lat: string = '23.8041';
  @IsNumberString()
  lon: string = '90.3563';
  @IsString()
  units: string = 'metric';
}