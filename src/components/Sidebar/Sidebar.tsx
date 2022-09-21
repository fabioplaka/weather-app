import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature0,
  faWind,
  faDroplet,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { SidebarType } from "../../types/sidebarType";

const Sidebar: FC<SidebarType> = ({ collapsed }) => {
  const sidebarItems = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faTemperature0} />,
      label: "Temperature",
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faWind} />,
      label: "Wind",
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faDroplet} />,
      label: "Humidity",
    },
    {
      key: "4",
      icon: <FontAwesomeIcon icon={faTemperatureArrowDown} />,
      label: "Pressure",
    },
  ];

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
