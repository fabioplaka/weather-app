import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DropdownTypes } from "../types/dropdownTypes";

const initialState = {
  label: "",
  value: "",
  id: "",
  disabled: undefined,
  title: undefined,
} as DropdownTypes;

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    selectedCountry: (state, action: PayloadAction<DropdownTypes>) => {
      return (state = action.payload);
    },
  },
});

export const { selectedCountry } = countrySlice.actions;
export default countrySlice.reducer;
