import { WeatherService } from './weather.service';
import { WeatherDto } from './weather.dto';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    getWeatherCurrent(query: WeatherDto): Promise<any>;
    getWeatherForcast(query: WeatherDto): Promise<any>;
}
