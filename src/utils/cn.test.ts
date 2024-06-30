import { describe, expect, it } from 'vitest';

import { cn } from './cn';

describe('cn', () => {
  it('classes', () => {
    expect(cn('text-lg', 'text-sm')).toBe('text-sm');
  });
});
