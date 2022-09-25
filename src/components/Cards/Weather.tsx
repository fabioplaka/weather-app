import { FC, useContext, useMemo } from "react";
import { Card, Layout } from "antd";
import styles from "./Weather.module.scss";
import { WeatherContext } from "../Content/Content";
import { CountryWeather } from "../../types/weatherType";

interface WeatherTypes {
  children: React.ReactNode;
}

const Weather: FC<WeatherTypes> = ({ children }): JSX.Element => {
  const value = useContext(WeatherContext) as CountryWeather | undefined;

  const image = useMemo(() => {
    return `https://openweathermap.org/img/wn/${value?.weather[0]?.icon}@2x.png`
  }, [value])

  console.log("image: ", image);

  return (
    <Card className={styles.card}>
      <Layout.Content className={styles.cardContent}>
        <Layout.Content className={styles.weatherContentContainer}>
          {children}
        </Layout.Content>
        {value?.weather[0]?.icon && <img src={image} alt={value?.weather[0].description} />}
       
      </Layout.Content>
    </Card>
  );
};

export default Weather;
