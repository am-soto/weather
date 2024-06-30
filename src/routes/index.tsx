import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createFileRoute } from '@tanstack/react-router';
import { ES, GB } from 'country-flag-icons/react/3x2';

import { Combobox } from '@/components/combobox';
import { ForecastCard } from '@/components/forecast-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { WeatherCard } from '@/components/weather-card';
import { City } from '@/domain/city';
import { useCurrentWeather } from '@/services/current-weather/useCurrentWeather';
import { useForecastWeather } from '@/services/forecast-weather/useForecastWeather';
import { useLang } from '@/services/lang/useLang';

const HomePage = () => {
  const { t } = useTranslation();
  const { lang, updateLang } = useLang();
  const [city, setCity] = useState<City | undefined>(undefined);
  const currentWeather = useCurrentWeather(city);
  const forecastWeather = useForecastWeather(city);

  return (
    <div className='mx-auto max-w-screen-sm'>
      <div className='mt-4 flex flex-col gap-2 min-[320px]:flex-row'>
        <Combobox value={city?.name} onValueChange={setCity} />
        <Select value={lang} onValueChange={updateLang}>
          <SelectTrigger className='w-[160px] max-[320px]:w-full'>
            <SelectValue placeholder='Idioma' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='es'>
              <span className='flex items-center gap-2'>
                <ES className='w-4' /> {t('es')}
              </span>
            </SelectItem>
            <SelectItem value='en'>
              <span className='flex items-center gap-2'>
                <GB className='w-4' /> {t('en')}
              </span>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='pt-6'>
        <WeatherCard
          isLoading={currentWeather.isLoading}
          city={city}
          weather={currentWeather.data}
        />
        <ForecastCard
          className='mt-4'
          isLoading={forecastWeather.isLoading}
          forecast={forecastWeather.data}
        />
      </div>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage,
});
