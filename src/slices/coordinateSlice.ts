import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CoordinateType = Number[] | [];

const initialState = [] as CoordinateType;

export const coordinateSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        countryCoordinates: (state, action: PayloadAction<CoordinateType>) => {
            return state = action.payload;
        }
    }
});

export const { countryCoordinates } = coordinateSlice.actions;
export default coordinateSlice.reducer;
