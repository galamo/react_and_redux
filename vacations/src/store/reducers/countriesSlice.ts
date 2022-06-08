import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountriesState {
  countries: Array<any>;
}

const initialState: CountriesState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (
      state: CountriesState,
      action: PayloadAction<Array<any>>
    ) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
