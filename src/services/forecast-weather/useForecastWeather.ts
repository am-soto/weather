import { useQuery } from '@tanstack/react-query';

import { City } from '@/domain/city';
import { Forecast } from '@/domain/forecast';
import { get } from '@/utils/client';

import { useLang } from '../lang/useLang';
import { ForecastWeatherResponse } from './dto';
import { mapper } from './mapper';

export const useForecastWeather = (city: City | undefined) => {
  const { lang } = useLang();
  const URL = `/api/data/2.5/forecast?lat=${city?.latitude}&lon=${city?.longitude}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`;
  return useQuery({
    queryKey: ['corecast-weather', city?.latitude, city?.longitude, lang],
    queryFn: () => get<ForecastWeatherResponse>(URL).then<Forecast[]>(mapper),
    enabled: city !== undefined,
  });
};
