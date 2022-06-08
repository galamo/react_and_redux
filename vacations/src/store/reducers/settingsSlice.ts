import {
  createSlice,
  PayloadAction,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
interface ISettingState {
  dateFormat: string;
}
const initialState: ISettingState = {
  dateFormat: "MMMM Do YYYY, h:mm:ss a",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDateFormat: (state: ISettingState, action: PayloadAction<string>) => {
      state.dateFormat = action.payload;
    },
  },
});
export const { setDateFormat } = settingsSlice.actions;
export default settingsSlice.reducer;
