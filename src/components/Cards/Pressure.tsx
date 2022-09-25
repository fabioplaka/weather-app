import { useContext } from "react";
import { CountryWeather } from "../../types/weatherType";
import { WeatherContext } from "../Content/Content";

const Pressure = (): JSX.Element => {
  const value = useContext(WeatherContext) as CountryWeather | undefined;

  return (
    <>
      <>Pressure: {value?.main?.pressure.toFixed(0)} h/Pa</>
    </>
  );
};

export default Pressure;
