import { Select } from "antd";
import { useState } from "react";
import styles from "./Dropdown.module.scss";

const { Option } = Select;

const Dropdown = () => {
  const [country, setCountry] = useState<string>();

  const handleChange = (value: string) => {
    setCountry(value);
  };

  return (
    <Select
      className={styles.dropdownWrapper}
      placeholder="Select a country"
      onChange={handleChange}
      value={country}
    >
      <Option value="albania">Albania</Option>
      <Option value="germany">Germany</Option>
      <Option value="usa">Usa</Option>
    </Select>
  );
};

export default Dropdown;
