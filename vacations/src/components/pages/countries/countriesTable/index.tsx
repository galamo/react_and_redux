import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICountry } from "..";
import { Flag } from "../../../ui-components/flag";
import { LanguagesChips } from "../../../ui-components/languages-chips";
import { DateContext } from "../../../../App";
import AppDate from "../../../app/appDate";

interface ICountries {
  countries: Array<ICountry>;
}

export function CountriesTable(props: ICountries) {
  const dateContextIsUtc = useContext(DateContext);

  const { countries } = props;
  if (!countries.length) return <div>No Data</div>;
  const singleCountry = countries[0];
  const headers = Object.keys(singleCountry);
  const HeadersCells = (): any => {
    if (!Array.isArray(headers)) return null;
    return headers.map((currentHeader: string) => {
      return (
        <TableCell key={currentHeader} align="left">
          {currentHeader}
        </TableCell>
      );
    });
  };

  const BodyCells = (): any => {
    if (!Array.isArray(countries)) return null;
    return countries.map((currentCountry: any) => {
      const languagesData =
        typeof currentCountry.languages === "object"
          ? Object.values(currentCountry.languages)
          : [];
      const reactKey = `${currentCountry.name}_${currentCountry.region}`;
      return (
        <TableRow key={reactKey}>
          <TableCell align="left">{currentCountry.region}</TableCell>
          <TableCell align="left">{currentCountry.name}</TableCell>
          <TableCell align="left">
            <Flag imageSrc={currentCountry?.flags?.png} />
          </TableCell>
          <TableCell align="left">
            <LanguagesChips languages={languagesData as Array<string>} />
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div>
      <AppDate date={new Date().getTime()} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <HeadersCells />
            </TableRow>
          </TableHead>
          <TableBody>
            <BodyCells />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
