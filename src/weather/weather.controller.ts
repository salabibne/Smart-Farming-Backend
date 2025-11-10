import { Controller,Get,Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import {WeatherDto} from './weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  getWeatherCurrent(@Query() query: WeatherDto) {
    return this.weatherService.fetchWeatherCurrent(query);
  }

  @Get('forecast')
  getWeatherForcast(@Query() query: WeatherDto) {
    return this.weatherService.fetchWeatherForecast(query);
  }
}
