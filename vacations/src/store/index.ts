import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import settingsReducer from './reducers/settingsSlice'




export const store = configureStore({
    reducer: {
        settings: settingsReducer

    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch