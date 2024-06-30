import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { City } from '@/domain/city';
import { useLang } from '@/services/lang/useLang';
import { cn } from '@/utils/cn';

const cities: City[] = [
  {
    name: 'London',
    localNames: {
      es: 'Londres',
      en: 'London',
    },
    latitude: '51.5073219',
    longitude: '-0.127647',
  },
  {
    name: 'Singapore',
    localNames: {
      es: 'Singapur',
      en: 'Singapore',
    },
    latitude: '1.2899175',
    longitude: '103.8519072',
  },
  {
    name: 'Toronto',
    localNames: {
      es: 'Toronto',
      en: 'Toronto',
    },
    latitude: '43.6534817',
    longitude: '-79.3839347',
  },
];

type ComboboxProps = {
  value?: string;
  onValueChange?: (city: City) => void;
};

const Combobox = ({ value: valueProps = '', onValueChange }: ComboboxProps) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(valueProps);

  const updateValue = (city: City) => {
    setValue(city.name);
    onValueChange?.(city);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='default'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between max-[320px]:w-full'
        >
          {value ? cities.find((city) => city.name === value)?.localNames[lang] : t('search')}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder={t('search')} />
          <CommandEmpty>{t('not_found')}</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {cities.map((city) => (
                <CommandItem
                  key={city.name}
                  value={city.name}
                  onSelect={() => {
                    updateValue(city);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === city.name ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {city.localNames[lang]}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
Combobox.displayName = 'Combobox';

export { Combobox };
