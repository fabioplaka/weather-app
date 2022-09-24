import { FC, useEffect, useState } from "react";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import { HeaderTypes } from "../../types/headerType";
import Dropdown from "../Dropdown/Dropdown";
import { CountryTypes } from "../../types/countryType";
import { fetchCountries } from "../../api/fetchCountries";

const Header: FC<HeaderTypes> = ({
  collapseSidebar,
  collapsed,
}): JSX.Element => {
  const [countriesList, setCountriesList] = useState<CountryTypes[]>();

  useEffect(() => {
    const countries = async () => {
      const response = await fetchCountries();
      setCountriesList(response);
    };
    countries();
  }, []);

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
      <Dropdown options={countriesList} />
    </Layout.Header>
  );
};

export default Header;
