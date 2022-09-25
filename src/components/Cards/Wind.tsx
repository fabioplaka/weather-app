import { useContext } from "react";
import { CountryWeather } from "../../types/weatherType";
import { WeatherContext } from "../Content/Content";

const Wind = (): JSX.Element => {
  const value = useContext(WeatherContext) as CountryWeather | undefined;

  return (
    <>
      <>Wind: {value?.wind?.speed.toFixed(0)} km/h</>
    </>
  );
};

export default Wind;
