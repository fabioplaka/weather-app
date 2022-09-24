import { CountryTypes } from '../types/countryType';
import { uuidGenerator } from './uuidGenerator';

export const countryMapper = (countries: any): CountryTypes[] => {
    return countries && countries.map((country: any) => {
        return {
            id: uuidGenerator(),
            name: country.name.common
        }
    }) 
}