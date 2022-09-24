import axios from 'axios';
import { countryMapper } from '../helpers/countryMapper';

const GET_COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async () => {
    try {
        const response = await axios.get(GET_COUNTRIES_URL);
        return countryMapper(response.data);
      } catch (error) {
        console.error(error);
      }
}