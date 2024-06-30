interface Weather {
  temperature: string;
  feelsLike: string;
  temperatureMin: string;
  temperatureMax: string;
  pressure: string;
  humidity: string;
  visibility: string;
  wind: string;
  weather: {
    name: string;
    description: string;
    icon: string;
  };
}

export type { Weather };
