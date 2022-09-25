import axios from "axios";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "3575dd67e3f01305528b6a51eaf7a274";

export const getWeather = async (latLong: Number[]) => {
  const response = await axios.get(WEATHER_API, {
    params: {
      lat: latLong[0],
      lon: latLong[1],
      units: "metric",
      appid: WEATHER_API_KEY,
    },
  });
  return response.data;
};
