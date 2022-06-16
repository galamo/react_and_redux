import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
interface SettingState {
    isUtc: boolean
}

const initialState: SettingState = {
    isUtc: false
}

const fetchCountries = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        return response.data
    }
)

export const settingSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUtc: (state: SettingState, action: PayloadAction<boolean>) => {
            state.isUtc = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const { setUtc } = settingSlice.actions
export default settingSlice.reducer
