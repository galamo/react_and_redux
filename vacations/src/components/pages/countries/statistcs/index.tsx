import React, { useMemo } from "react";
import Badge from "@mui/material/Badge";

import { ICountry } from "..";

export function CountriesStats(props: { countries: Array<ICountry> }) {
  console.log("CountriesStats Render");
  const totalPopulation = useMemo(() => {
    return calcPopulation(props.countries);
  }, [props.countries.length]);
  //   const totalPopulation = calcPopulation(props.countries);
  return (
    <div>
      <h2>
        <span>Total Population</span>
        <Badge
          style={{ marginLeft: "4rem" }}
          badgeContent={totalPopulation}
          color="primary"
          max={9999999999999}
        ></Badge>
      </h2>
    </div>
  );
}

function calcPopulation(countries: Array<ICountry>): number {
  console.log("calc population execute");
  return countries.reduce((currentPopulation, country: ICountry) => {
    if (!country.population) return currentPopulation;
    return currentPopulation + Number(country.population || 0);
  }, 0);
}
