import { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gradient-to-t from-white/15 to-blue-200/15',
        className,
      )}
      {...props}
    />
  );
};
Skeleton.displayName = 'Skeleton';

export { Skeleton };
