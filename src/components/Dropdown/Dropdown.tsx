import { Select } from "antd";
import { FC, useState } from "react";
import styles from "./Dropdown.module.scss";
import { CountryTypes } from "../../types/countryType";

const { Option } = Select;
interface OptionsType {
  options: CountryTypes[] | undefined;
}

const Dropdown:FC<OptionsType> = ({ options }) => {
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
      {options && options.map((option) => {
        return (
          <Option key={option.id} value={option.name}>{option.name}</Option>
        )
      })}
    </Select>
  );
};

export default Dropdown;
