import { Weather } from './weather';

interface Forecast {
  datetime: Date;
  weather: Weather;
}

export type { Forecast };
