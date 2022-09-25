import { useContext } from "react";
import { CountryWeather } from "../../types/weatherType";
import { WeatherContext } from "../Content/Content";

const Humidity = (): JSX.Element => {
  const value = useContext(WeatherContext) as CountryWeather | undefined;

  return (
    <>
      <>Humidity: {value?.main?.humidity.toFixed(0)} %</>
    </>
  );
};

export default Humidity;
