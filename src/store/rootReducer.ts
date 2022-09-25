import { combineReducers } from '@reduxjs/toolkit';
import countrySlice from '../slices/countrySlice';
import coordinateSlice from '../slices/coordinateSlice';

const rootReducer = combineReducers({
    selectedCountry:  countrySlice,
    coordinates: coordinateSlice,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;