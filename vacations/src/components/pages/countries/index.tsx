import React, { useState, useEffect } from "react";
import { MainHeader } from "../../ui-components/header";
import { CountriesTable } from "./countriesTable";
import axios from "axios";
import css from "./style.module.css";
import { WithLoading } from "../../ui-components/with-loading";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCountries } from "../../../store/reducers/countriesSlice";

const baseUrl = "https://restcountries.com/v3.1";
const apiUrlAll = `${baseUrl}/all`;
const apiUrlCountryName = `${baseUrl}/name/`;

export interface ICountry {
  name: { common: string; official: string };
  region: string;
  flags: Array<any>;
  languages: Array<any>;
}

export function CountriesPage() {
  const initialState: Array<ICountry> = [];
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const [countriesLocal, setCountriesLocal] = useState(initialState);
  const [searchValue, setSearchValue] = useState(initialState);
  useEffect(() => {
    async function getCountries() {
      try {
        const result = await axios.get(apiUrlAll);
        const { data } = result;
        const countries = data.map((c: ICountry) => {
          return {
            region: c.region,
            name: c.name.common || c.name.official,
            flags: c.flags,
            languages: c.languages,
          };
        });
        dispatch(setCountries(countries));
        // setCountriesLocal(countries);
      } catch (error) {
        //TODO put nice alert
        alert("Something went wrong");
      }
    }
    getCountries();
  }, []);
  useEffect(() => {
    return () => {
      console.log("Countries Component Unmounted");
    };
  }, []);

  async function getCountriesByName(value: string) {
    try {
      const result = await axios.get(`${apiUrlCountryName}/${value}`);
      const { data } = result;
      setCountriesLocal(
        data.map((c: ICountry) => {
          return {
            region: c.region,
            name: c.name.common || c.name.official,
            flags: c.flags,
            languages: c.languages,
          };
        })
      );
    } catch (error) {
      //TODO put nice alert
      alert("Something went wrong");
    }
  }

  return (
    <div className={css.center}>
      <MainHeader text={"Countries"} color={"black"} size={"22px"} />
      <div style={{ marginBottom: "10px" }}>
        <h3> Search Country by Name</h3>
        <TextField
          onChange={(e) => {
            const value = e.currentTarget.value;
            getCountriesByName(value);
          }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <WithLoading isLoading={Boolean(!countries.length)}>
        <CountriesTable countries={countries} />
      </WithLoading>
    </div>
  );
}
