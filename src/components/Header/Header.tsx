import { FC } from "react";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import { HeaderTypes } from "../../types/headerType";
import Dropdown from "../Dropdown/Dropdown";

const Header: FC<HeaderTypes> = ({
  collapseSidebar,
  collapsed,
}): JSX.Element => {
  return (
    <Layout.Header
      className={styles.container}
      style={{
        padding: 0,
      }}
    >
      {collapsed ? (
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          onClick={collapseSidebar}
          className={styles.collapseIcon}
          size="lg"
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          onClick={collapseSidebar}
          className={styles.collapseIcon}
          size="lg"
        />
      )}
      <Dropdown />
    </Layout.Header>
  );
};

export default Header;
