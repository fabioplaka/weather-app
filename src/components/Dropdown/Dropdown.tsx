import { Select } from "antd";
import { FC } from "react";
import styles from "./Dropdown.module.scss";
import { CountryTypes } from "../../types/countryType";
import { DropdownTypes } from "../../types/dropdownTypes";

const { Option } = Select;
interface OptionsType {
  options: CountryTypes[] | undefined;
  handleChange: (value: DropdownTypes) => void;
  value: DropdownTypes;
}

const Dropdown: FC<OptionsType> = ({
  options,
  handleChange,
  value,
}): JSX.Element => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Select
      labelInValue
      className={styles.dropdownWrapper}
      onChange={handleChange}
      showSearch
      value={value}
      filterOption={(input, option) =>
        (option!.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      onSearch={onSearch}
    >
      {options &&
        options.map((option) => {
          return (
            <Option key={option.id} value={option.name}>
              {option.name}
            </Option>
          );
        })}
    </Select>
  );
};

export default Dropdown;
