import { Layout } from "antd";
import "antd/dist/antd.min.css";
import styles from "./Layout.module.scss";
import Content from "../Content/Content";

const Main = (): JSX.Element => {
  return (
    <Layout className={styles.container}>
      <Content />
    </Layout>
  );
};

export default Main;
