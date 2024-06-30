import { Forecast } from '@/domain/forecast';

import { ForecastWeatherResponse } from './dto';

const mapper = (response: ForecastWeatherResponse): Forecast[] =>
  response.list.map((r) => ({
    datetime: new Date(r.dt_txt),
    weather: {
      temperature: r.main.temp.toString(),
      feelsLike: r.main.feels_like.toString(),
      temperatureMin: r.main.temp_min.toString(),
      temperatureMax: r.main.temp_max.toString(),
      pressure: r.main.pressure.toString(),
      humidity: r.main.humidity.toString(),
      visibility: r.visibility.toString(),
      wind: r.wind.speed.toString(),
      weather: {
        name: r.weather[0].main,
        description: r.weather[0].description,
        icon: r.weather[0].icon.slice(0, -1),
      },
    },
  }));

export { mapper };
