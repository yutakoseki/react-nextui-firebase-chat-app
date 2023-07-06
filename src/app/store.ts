import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>; // 現在の状態を返す
