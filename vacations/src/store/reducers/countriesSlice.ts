import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { axiosApi } from "../axios.instance";

interface CountriesState {
  countries: Array<any>;
  isLoading: boolean;
}

const initialState: CountriesState = {
  countries: [],
  isLoading: false,
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
  extraReducers(builder) {
    return getBuilderCases(builder);
  },
});

function getBuilderCases(builder: ActionReducerMapBuilder<CountriesState>) {
  return builder
    .addCase(getCountriesApi.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getCountriesApi.rejected, (state, action) => {
      state.isLoading = false;
      state.countries = null as any;
    })
    .addCase(getCountriesApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    });
}

export const getCountriesApi = createAsyncThunk(
  "get/countries",
  async (id: string) => {



    
    const response = await axiosApi.get(`/all/${id}`);
    const countries = response.data.map(adaptCountry);
    return countries;
  }
);

function adaptCountry(c: any) {
  return {
    region: c.region,
    name: c.name.common || c.name.official,
    flags: c.flags,
    languages: c.languages,
  };
}

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
