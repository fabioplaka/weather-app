import { useContext } from "react";
import { CountryWeather } from "../../types/weatherType";
import { WeatherContext } from "../Content/Content";

const Temperature = (): JSX.Element => {
  const value = useContext(WeatherContext) as CountryWeather | undefined;

  return (
    <>
      <>Temperature: {value?.main?.temp.toFixed(0)}°C</>
    </>
  );
};

export default Temperature;
