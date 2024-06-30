import { Weather } from '@/domain/weather';

import { CurrentWeatherResponse } from './dto';

const mapper = (response: CurrentWeatherResponse): Weather => ({
  temperature: response.main.temp.toString(),
  feelsLike: response.main.feels_like.toString(),
  temperatureMin: response.main.temp_min.toString(),
  temperatureMax: response.main.temp_max.toString(),
  pressure: response.main.pressure.toString(),
  humidity: response.main.humidity.toString(),
  visibility: response.visibility.toString(),
  wind: response.wind.speed.toString(),
  weather: {
    name: response.weather[0].main,
    description: response.weather[0].description,
    icon: response.weather[0].icon.slice(0, -1),
  },
});

export { mapper };
