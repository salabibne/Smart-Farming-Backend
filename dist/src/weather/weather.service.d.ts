import { WeatherDto } from './weather.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class WeatherService {
    private readonly httpService;
    private readonly configService;
    constructor(httpService: HttpService, configService: ConfigService);
    fetchWeatherByType(fetchWeatherDto: WeatherDto, type?: string): Promise<any>;
    fetchWeatherCurrent(fetchWeatherDto: WeatherDto): Promise<any>;
    fetchWeatherForecast(fetchWeatherDto: WeatherDto): Promise<any>;
}
