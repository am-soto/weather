import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { LucideProps } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip';

type WeatherIconProps = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  stat: string;
  tooltip: string;
};

const WeatherIcon = ({ icon: Icon, stat, tooltip }: WeatherIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className='flex flex-col items-center'>
            <Icon />
            <span>{stat}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
WeatherIcon.displayName = 'WeatherIcon';

export { WeatherIcon };
