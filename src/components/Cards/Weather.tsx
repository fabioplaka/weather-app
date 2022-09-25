import { FC } from "react";
import { Card, Layout } from "antd";
import styles from "./Weather.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

interface WeatherTypes {
  children: React.ReactNode;
}

const Weather: FC<WeatherTypes> = ({ children }): JSX.Element => {
  return (
    <Card className={styles.card}>
      <Layout.Content className={styles.cardContent}>
        <Layout.Content className={styles.weatherContentContainer}>
          {children}
        </Layout.Content>
        <FontAwesomeIcon size="4x" icon={faSun} />
      </Layout.Content>
    </Card>
  );
};

export default Weather;
