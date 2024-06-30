import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/skeleton';
import { Forecast } from '@/domain/forecast';
import { useLang } from '@/services/lang/useLang';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';
import { formatNumber } from '@/utils/formatNumber';

type ForecastCardProps = {
  className?: string;
  isLoading?: boolean;
  forecast?: Forecast[];
};

const ForecastCard = ({ className, isLoading, forecast }: ForecastCardProps) => {
  const { t } = useTranslation();
  const { lang } = useLang();

  if (isLoading) return <Skeleton className={cn('h-[325px] rounded-xl', className)} />;

  if (!forecast) return null;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{t('forecast')}</CardTitle>
      </CardHeader>
      <CardContent className='flex gap-2 overflow-x-scroll px-8'>
        {forecast.map((f) => (
          <div key={f.datetime.toISOString()} className='mx-4 flex flex-col items-center gap-4'>
            <div className='flex flex-col items-center text-sm font-light'>
              {formatDate(f.datetime, lang)
                .split(', ')
                .map((d, i) => (
                  <span key={`${d}_${i}`}>{d}</span>
                ))}
            </div>
            <img className='w-[40px]' src={`./${f.weather?.weather.icon}.png`} />
            <div className='col-span-2 max-[320px]:mx-auto min-[320px]:col-span-1'>
              <p className='flex justify-center gap-2'>
                <span className='text-lg font-bold'>
                  {formatNumber(f.weather?.temperature, lang)}
                </span>
                <span className='font-semibold'>ºC</span>
              </p>
              <p className='text-center text-sm font-light'>{f.weather.weather.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
ForecastCard.displayName = 'ForecastCard';

export { ForecastCard };
