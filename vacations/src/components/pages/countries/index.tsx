import React, { useState, useEffect } from "react";
import { MainHeader } from "../../ui-components/header";
import { CountriesTable } from "./countriesTable";
import axios from "axios";
import css from "./style.module.css";
import { WithLoading } from "../../ui-components/with-loading";
import TextField from "@mui/material/TextField";
import lodash from "lodash";
const { debounce } = lodash;

const baseUrl = "https://restcountries.com/v3.1";
const apiUrlAll = `${baseUrl}/all`;
const apiUrlCountryName = `${baseUrl}/name`;

export interface ICountry {
  name: { common: string; official: string };
  region: string;
  flags: Array<any>;
  languages: Array<any>;
}

export function CountriesPage() {
  const initialState: Array<ICountry> = [];
  const [countries, setCountries] = useState(initialState);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    async function getCountries() {
      try {
        const result = await axios.get(apiUrlAll);
        const { data } = result;
        setCountries(
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
    getCountries();
  }, []);

  useEffect(() => {
    async function getCountriesByName(value: string) {
      try {
        const result = await axios.get(`${apiUrlCountryName}/${value}`);
        const { data } = result;
        setCountries(
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
    if (searchValue) getCountriesByName(searchValue);
  }, [searchValue]);

  console.log("searchValue", searchValue);
  function handler(e: any) {
    const value = e.target.value;
    console.log("This is debouce", value);
    setSearchValue(value);
  }
  const onChangeSearchValue = debounce(handler, 1000);
  return (
    <div className={css.center}>
      <MainHeader text={"Countries"} color={"black"} size={"22px"} />
      <div style={{ marginBottom: "10px" }}>
        <h3> Search Country by Name</h3>
        <TextField
          onChange={onChangeSearchValue}
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

// TODO support Subhi UI component
// function SubhiInput(props: { onChange: Function }) {
//   return (
//     <input
//       onChange={(e) => {
//         console.log(e.currentTarget.value);
//         props.onChange(e.currentTarget.value);
//       }}
//     />
//   );
// }
