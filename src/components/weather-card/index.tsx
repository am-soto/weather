import { useTranslation } from 'react-i18next';

import { Droplets, ThermometerSnowflake, ThermometerSun, Wind } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/skeleton';
import { City } from '@/domain/city';
import { Weather } from '@/domain/weather';
import { useLang } from '@/services/lang/useLang';
import { cn } from '@/utils/cn';
import { formatNumber } from '@/utils/formatNumber';

import { WeatherIcon } from '../weather-icon';

type WeatherCardProps = {
  className?: string;
  isLoading?: boolean;
  city?: City;
  weather?: Weather;
};

const WeatherCard = ({ className, isLoading, city, weather }: WeatherCardProps) => {
  const { lang } = useLang();
  const { t } = useTranslation();

  if (isLoading) return <Skeleton className={cn('h-[325px] rounded-xl', className)} />;

  if (!city || !weather)
    return (
      <Card className='p-8 text-center'>
        <span>{t('select')}</span>
      </Card>
    );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{city?.localNames[lang]}</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-2'>
        <img
          className='col-span-2 max-[320px]:mx-auto max-[320px]:mb-4 min-[320px]:col-span-1'
          src={`./${weather?.weather.icon}.png`}
        />
        <div className='col-span-2 max-[320px]:mx-auto min-[320px]:col-span-1'>
          <p className='flex items-start gap-2'>
            <span className='text-4xl font-bold'>{formatNumber(weather?.temperature, lang)}</span>
            <span className='font-semibold'>º C</span>
          </p>
          <p className='text-sm font-light'>
            {t('feels')}{' '}
            <span className='font-semibold'>{formatNumber(weather?.temperature, lang)}</span> º C
          </p>
          <p className='text-sm font-light'>{weather.weather.description}</p>
        </div>
        <div className='col-span-2 mt-4 flex flex-col justify-between gap-4 text-sm font-light min-[320px]:flex-row'>
          <WeatherIcon
            icon={Droplets}
            stat={`${formatNumber(weather?.humidity, lang)} %`}
            tooltip={t('humidity')}
          />
          <WeatherIcon
            icon={Wind}
            stat={`${formatNumber(weather?.wind, lang)} km/h`}
            tooltip={t('wind')}
          />
          <WeatherIcon
            icon={ThermometerSnowflake}
            stat={`${formatNumber(weather?.temperatureMin, lang)} km/h`}
            tooltip={t('tempMin')}
          />
          <WeatherIcon
            icon={ThermometerSun}
            stat={`${formatNumber(weather?.temperatureMax, lang)} km/h`}
            tooltip={t('tempMax')}
          />
        </div>
      </CardContent>
    </Card>
  );
};
WeatherCard.displayName = 'WeatherCard';

export { WeatherCard };
