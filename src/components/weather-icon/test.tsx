import { render, screen } from '@testing-library/react';
import { Plus } from 'lucide-react';
import { describe, expect, it } from 'vitest';

import { WeatherIcon } from '.';

describe('WeatherIcon', () => {
  it('show text', () => {
    render(<WeatherIcon icon={Plus} stat={'1000'} tooltip={'Tooltip text'} />);
    const text = screen.getByText('1000');
    expect(text).toBeInTheDocument();
  });
});
