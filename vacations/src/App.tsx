import React, { createContext, useState } from "react";
import "./App.css";
import { CountriesPage } from "./components/pages/countries";

// @ts-ignore
export const DateContext = createContext();
// @ts-ignore
export const KaramContext = createContext();
// @ts-ignore
export const SubhiContext = createContext();

const providers = [DateContext, KaramContext, SubhiContext];

function ProvidersApp() {
  return providers.reduce((App, CurrentProvider: any) => {
    return (
      <CurrentProvider value={1}>
        <App />
      </CurrentProvider>
    );
  }, <App />);
}

function App() {
  const [isUtc, setisUtc] = useState(false);

  return (
    <DateContext.Provider value={isUtc}>
      <KaramContext.Provider value={"Tira"}>
        <SubhiContext.Provider value={"Tsur itshak"}>
          <div>
            <CountriesPage />
          </div>
        </SubhiContext.Provider>
      </KaramContext.Provider>
    </DateContext.Provider>
  );
}

export default App;
