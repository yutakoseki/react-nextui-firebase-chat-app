import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// 初期値型
interface UserState {
    uid: string;
    username: string;
    password: string;
    photoURL: string;
}

// 初期値
const initialState: UserState = {
    uid: "",
    username: "",
    password: "",
    photoURL: "",
};

// ユーザーのログイン状況を管理するスライス
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // stateの値をアクションで引数に渡した値に書き換える
        changeUID: (state, action: PayloadAction<string>) => {
            state.uid = action.payload;
        },
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changePhotoURL: (state, action: PayloadAction<string>) => {
            state.photoURL = action.payload;
        },
    },
});

// 他のファイルで使用できるように関数を外出し
export const { changeUID, changeUsername, changePassword, changePhotoURL } = userSlice.actions;
export default userSlice;
