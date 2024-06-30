import { useQuery } from '@tanstack/react-query';

import { City } from '@/domain/city';
import { Weather } from '@/domain/weather';
import { get } from '@/utils/client';

import { useLang } from '../lang/useLang';
import { CurrentWeatherResponse } from './dto';
import { mapper } from './mapper';

export const useCurrentWeather = (city: City | undefined) => {
  const { lang } = useLang();
  const URL = `/api/data/2.5/weather?lat=${city?.latitude}&lon=${city?.longitude}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`;
  return useQuery({
    queryKey: ['current-weather', city?.latitude, city?.longitude, lang],
    queryFn: () => get<CurrentWeatherResponse>(URL).then<Weather>(mapper),
    enabled: city !== undefined,
  });
};
