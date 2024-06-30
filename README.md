# Weather

An application to see the weather forecast.

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTk2M2d6dzJldWZwbWxiN2tnb3N2d3NoZXZtdTJiOXF6dnB1MW9mZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9t3XdrwxLrkm3HKvWE/giphy.gif)

This project uses the next tools among others Vite, React, Typescript, Vitest, React Testing Library, Tailwind, RadixUI (based on shadcn/ui), TanStack Query, TanStack Router, i18next and Zustand.

The data provided by OpenWeather, the illustrations by Freepik and the design is inspired by Dribbble.

### Setup

Install the dependencies:

```
pnpm i
```

Add the OpenWeather API key in the `.env`.

```
VITE_WEATHER_API=your_key_here
```

Run the project in a developement environment:

```
pnpm dev
```

Or build and run the project in production:

```
pnpm build && pnpm preview
```

Test the application with:
```
pnpm test
```