import React, { createContext, useState, useReducer } from "react";
import Switch from "@mui/material/Switch";

import "./App.css";
import { CountriesPage } from "./components/pages/countries";

interface IContext {
  isUtc: boolean;
  dateFormat: string;
  dispatch: Function;
}

export const DateContext = createContext<Partial<IContext>>({});

interface IAction {
  type: string;
  payload?: any;
}

export const ACTIONS = {
  SET_UTC: "SET_UTC",
};

function reducer(state: { isUtc: boolean }, action: IAction) {
  const { type: actionType } = action;
  switch (actionType) {
    case ACTIONS.SET_UTC: {
      return { ...state, isUtc: !state.isUtc };
    }
    default: {
      return state;
    }
  }
}

function App() {
  // @ts-ignore
  type initState = { isUtc: boolean };
  const initialState: initState = { isUtc: false };
  // @ts-ignore
  const [globalState, dispatch] = useReducer(reducer, initialState);
  console.log("global state", globalState);
  // const [isUtc, setisUtc] = useState(true); => reference to local state
  const [dateFormat, setDateFormat] = useState("dd/mm/yy hh:mm:ss");

  return (
    <DateContext.Provider
      value={{ isUtc: globalState.isUtc, dateFormat, dispatch }}
    >
      <div>
        <div style={{ backgroundColor: "rgba(235,125,144,0.5)" }}>
          is UTC
          <Switch
            checked={globalState.isUtc}
            onChange={(_, checked) => {
              dispatch({
                type: ACTIONS.SET_UTC,
              });
            }}
          />
        </div>
        <CountriesPage />
      </div>
    </DateContext.Provider>
  );
}

export default App;
