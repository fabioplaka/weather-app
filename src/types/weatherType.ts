type Coord = {
  lon: Number;
  lat: Number;
};

type Weather = {
  id: Number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: Number;
  feels_like: Number;
  temp_min: Number;
  temp_max: Number;
  pressure: Number;
  humidity: Number;
  sea_level: Number;
  grnd_level: Number;
};

type Wind = {
  speed: Number;
  deg: Number;
  gust: Number;
};

type Clouds = {
  all: Number;
};

type System = {
  country: string;
  sunrise: Number;
  sunset: Number;
};

export type CountryWeather = {
  coord: Coord;
  weather: Array<Weather>;
  base: string;
  main: Main;
  visibility: Number;
  wind: Wind;
  clouds: Clouds;
  dt: Number;
  sys: System;
  timezone: Number;
  id: Number;
  name: string;
  cod: Number;
};
