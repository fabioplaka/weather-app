import { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Content from "../Content/Content";

const LayoutSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={styles.container}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapseSidebar={collapseSidebar} collapsed={collapsed} />
        <Content />
      </Layout>
    </Layout>
  );
};

export default LayoutSidebar;
