import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingState {
  isUtc: boolean;
  dateFormat: string;
}

const initialState: SettingState = {
  isUtc: false,
  dateFormat: "MMMM Do YYYY, h:mm:ss a",
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUtc: (state: SettingState, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isUtc = action.payload;
    },
    setDateFormat: (state: SettingState, action: PayloadAction<string>) => {
      state.dateFormat = action.payload;
    },
  },
});

export const { setUtc, setDateFormat } = settingSlice.actions;
export default settingSlice.reducer;
