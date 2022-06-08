import { configureStore, Store } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

type RootStateType = typeof store.getState;
type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<RootStateType>;
export type AppDispatch = DispatchType;
