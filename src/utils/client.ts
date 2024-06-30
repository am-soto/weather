const get = async <T>(url: string, headers: Record<string, string> = {}): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return (await response.json()) as T;
};

export { get };
