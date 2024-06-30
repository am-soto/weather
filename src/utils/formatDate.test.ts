import { describe, expect, it } from 'vitest';

import { formatDate } from './formatDate';

describe('FormatDate', () => {
  it('ES', () => {
    expect(formatDate('2024-07-06 06:00:00', 'es')).toBe('sábado, 06/07, 06:00');
  });
  it('EN', () => {
    expect(formatDate('2024-07-06 06:00:00', 'en')).toBe('Saturday, 06/07, 06:00');
  });
});
