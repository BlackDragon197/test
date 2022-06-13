import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import restsReducer from './slices/restSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        rests: restsReducer
    }
})