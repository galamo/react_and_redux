import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SettingState {
    isUtc: boolean
}

const initialState: SettingState = {
    isUtc: false
}

export const settingSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUtc: (state: SettingState, action: PayloadAction<boolean>) => {
            state.isUtc = action.payload
        }
    }
})


export const { setUtc } = settingSlice.actions
export default settingSlice.reducer
