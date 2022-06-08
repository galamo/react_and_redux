import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesSlice";
import settingsReducer from "./reducers/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
