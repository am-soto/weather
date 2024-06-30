import { describe, expect, it } from 'vitest';

import { formatNumber } from './formatNumber';

describe('FormatNumber', () => {
  it('EN to ES', () => {
    expect(formatNumber('12.3', 'es')).toBe('12,3');
  });
  it('EN to EN', () => {
    expect(formatNumber('12.3', 'en')).toBe('12.3');
  });
});
