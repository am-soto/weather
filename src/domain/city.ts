interface City {
  name: string;
  localNames: {
    [key: string]: string;
  };
  latitude: string;
  longitude: string;
}

export type { City };
