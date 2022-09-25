import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import { fetchCountries } from "../../api/fetchCountriesApi";
import { countryCoordinates } from "../../slices/coordinateSlice";
import { selectedCountry } from "../../slices/countrySlice";
import { CountryTypes } from "../../types/countryType";
import { DropdownTypes, SelectedCountryType } from "../../types/dropdownTypes";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Content.module.scss";
import { getWeather } from "../../api/weatherApi";
import WeatherContainer from "../Cards/WeatherContainer";
import { CountryWeather } from "../../types/weatherType";

export const WeatherContext = React.createContext<string | CountryWeather | undefined>('');


const Content = (): JSX.Element => {
  const [countriesList, setCountriesList] = useState<CountryTypes[]>();
  const [countryWeather, setCountryWeather] = useState();
  const [isError, setError] = useState<boolean>(false);

  const country = useSelector(
    ({ selectedCountry }: SelectedCountryType) => selectedCountry
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const countries = async () => {
      const response = await fetchCountries();
      setCountriesList(response);
    };
    countries();
  }, []);

  const sortedCountries = useMemo(() => {
    let result: CountryTypes[] | undefined = countriesList;
    result = countriesList?.sort((a: CountryTypes, b: CountryTypes) =>
      a.name.localeCompare(b.name)
    );
    return result;
  }, [countriesList]);

  const getCountryCoordinates = useMemo(() => {
    let result: CountryTypes[] | undefined = countriesList;
    result = countriesList?.filter(
      (item: CountryTypes) => item.name === country.value
    );
    return result?.length ? result[0]?.latlng : [];
  }, [country, countriesList]);

  useEffect(() => {
    dispatch(countryCoordinates(getCountryCoordinates));
  }, [getCountryCoordinates, dispatch]);

  const handleChange = (value: DropdownTypes) => {
    dispatch(selectedCountry(value));
  };

  useEffect(() => {
    const weather = async (coordinates: Number[]) => {
      try {
        const response = await getWeather(coordinates);
        setCountryWeather(response);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    weather(getCountryCoordinates);
  }, [getCountryCoordinates]);

  return (
    <Layout.Content className={styles.container}>
      <Layout.Content className={styles.errorContainer}>
        {isError && (
          <h2 className={styles.titleStyles}>Please select a country</h2>
        )}
      </Layout.Content>

      <Dropdown
        options={sortedCountries}
        handleChange={handleChange}
        value={country}
      />
      <Layout.Content className={styles.errorContainer}>
        {!isError && <h2 className={styles.titleStyles}>{country?.label}</h2>}
      </Layout.Content>
      <WeatherContext.Provider value={countryWeather}>
        <WeatherContainer />
      </WeatherContext.Provider>
      
    </Layout.Content>
  );
};

export default Content;
