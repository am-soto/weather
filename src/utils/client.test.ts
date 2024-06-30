import { describe, expect, it, vi } from 'vitest';

import { get } from './client';

const mockedImplementation = () =>
  Promise.resolve({
    ok: true,
    json() {
      return { data: 'mocked data' };
    },
  });

describe('Client', () => {
  global.fetch = vi.fn(mockedImplementation);
  it('get', async () => {
    const data = await get('url.com');
    expect(data).toEqual({ data: 'mocked data' });
  });
});
