import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userSlice from "../features/userSlice";
import { save, load } from 'redux-localstorage-simple';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        counter: counterReducer,
    },
    // storeの内容をローカルストレージに保存する
    preloadedState: load(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

export type RootState = ReturnType<typeof store.getState>; // 現在の状態を返す
