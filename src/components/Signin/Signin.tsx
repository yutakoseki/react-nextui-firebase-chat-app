import React, { useState } from 'react'
import SigninUI from './SigninUI'
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername, changePassword, changeUserid, changePhotoURL } from "../../features/userSlice";
import useInsertFirebase from '../../hooks/useInsertFirebase';

interface User {
    userid: string;
    password: string;
}

const Signin = () => {
    const [saveData, setSaveData] = useState({
        userid: "",       // ユーザーID
        password: "",     // ユーザー名
    });
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [errmsg, setErrmsg] = useState("");
    const { signup } = useInsertFirebase();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ユーザー名を取得
    const onUserIdChange = (value: string) => {
        console.log(value);
        setSaveData({...saveData, userid: value})
    };

    // パスワードを取得
    const onPasswordChange = (value: string) => {
        console.log(value);
        setSaveData({...saveData, password: value})
    };

        // 登録
        const onClickButton = async (value: boolean) => {
            if(!saveData.userid && !saveData.password){
                setErrmsg("Please enter your username and password.");
                return;
            }
            if (value) {
                // ユーザー名重複チェック

                let result = await signup("users", saveData.userid, saveData);
                if(result){
                    dispatch(changeUserid(saveData.userid));
                    dispatch(changeUsername(saveData.userid));
                    dispatch(changePassword(saveData.password));
                    dispatch(changePhotoURL("https://github.com/yutakoseki/react-nextui-firebase-chat-app/blob/master/src/image/usericon/kkrn_icon_user_2.png?raw=true"));
                    navigate("/");
                }
            }
        };
  return (
    <><SigninUI userid={userid} onUserIdChange={onUserIdChange} password={password} onPasswordChange={onPasswordChange} onClickButton={onClickButton} errmsg={errmsg}/></>
  )
}

export default Signin