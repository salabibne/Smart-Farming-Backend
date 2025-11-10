// import { Injectable } from '@nestjs/common';
// import {  WeatherDto } from './weather.dto';
// import { HttpService } from '@nestjs/axios';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class WeatherService {
//   constructor(
//     private readonly httpService: HttpService,
//     private configService: ConfigService,
//   ) {}
//   getTodaysWeather(fetchWeatherDto: WeatherDto) {
//     const { lat, lon, units } = fetchWeatherDto;

//     const api = this.configService.get<string>('WEATHER_API_KEY');
//     console.log("API",api);
//     return this.httpService.get(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`,
//     );
//   }
// }


import { Injectable } from '@nestjs/common';
import { WeatherDto } from './weather.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}


  async fetchWeatherByType(fetchWeatherDto: WeatherDto,type: string='weather') {
    const { lat, lon, units } = fetchWeatherDto;
    const api = this.configService.get<string>('WEATHER_API_KEY');

    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`,
        ),
      );

      // ✅ Return only the data, not the entire Axios response object
      return response.data;
    } catch (error) {
      console.error('Weather API Error:', error.message);
      throw error;
    }
  }

  async fetchWeatherCurrent(fetchWeatherDto: WeatherDto) {
    return this.fetchWeatherByType(fetchWeatherDto, 'weather');
  }

  async fetchWeatherForecast(fetchWeatherDto: WeatherDto) {
    return this.fetchWeatherByType(fetchWeatherDto, 'forecast');
  }

}
