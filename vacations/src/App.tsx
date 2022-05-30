import React, { createContext, useState } from "react";
import Switch from "@mui/material/Switch";

import "./App.css";
import { CountriesPage } from "./components/pages/countries";

interface IContext {
  isUtc: boolean;
  dateFormat: string;
  setisUtc: Function;
}

export const DateContext = createContext<Partial<IContext>>({});

function App() {
  const [isUtc, setisUtc] = useState(true);
  const [dateFormat, setDateFormat] = useState("dd/mm/yy hh:mm:ss");

  return (
    <DateContext.Provider value={{ isUtc, dateFormat, setisUtc }}>
      <div>
        <div style={{ backgroundColor: "rgba(235,125,144,0.5)" }}>
          is UTC
          <Switch
            checked={isUtc}
            onChange={(_, checked) => {
              setisUtc(!isUtc);
            }}
          />
        </div>
        <CountriesPage />
      </div>
    </DateContext.Provider>
  );
}

export default App;
