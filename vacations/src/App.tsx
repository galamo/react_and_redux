import React, { createContext, useState } from "react";
import Switch from "@mui/material/Switch";

import "./App.css";
import { CountriesPage } from "./components/pages/countries";

// @ts-ignore
export const DateContext = createContext();

function App() {
  const [isUtc, setisUtc] = useState(true);

  return (
    <DateContext.Provider value={isUtc}>
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
