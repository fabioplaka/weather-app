import { Row } from "antd";
import Temperature from "./Temperature";
import Weather from "./Weather";
import styles from "../Content/Content.module.scss";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Pressure from "./Pressure";

const WeatherContainer = (): JSX.Element => {
  return (
    <>
      <Row className={styles.row}>
        <Weather>
          <Temperature />
        </Weather>
      </Row>
      <Row className={styles.row}>
        <Weather>
          <Wind />
        </Weather>
      </Row>
      <Row className={styles.row}>
        <Weather>
          <Humidity />
        </Weather>
      </Row>
      <Row className={styles.row}>
        <Weather>
          <Pressure />
        </Weather>
      </Row>
    </>
  );
};

export default WeatherContainer;
