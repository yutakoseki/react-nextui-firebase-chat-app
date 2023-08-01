import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// 初期値型
interface UserState {
    uid: string;
    userid: string;
    username: string;
    password: string;
    photoURL: string;
    language: string;
}

// 初期値
const initialState: UserState = {
    uid: "",
    userid: "",
    username: "",
    password: "",
    photoURL: "",
    language: "ja",
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
        changeUserid: (state, action: PayloadAction<string>) => {
            state.userid = action.payload;
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
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
      },
    },
});

// 他のファイルで使用できるように関数を外出し
export const { changeUID, changeUserid, changeUsername, changePassword, changePhotoURL, changeLanguage } = userSlice.actions;
export default userSlice;
