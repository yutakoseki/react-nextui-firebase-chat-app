import React, { useState } from "react";
import LoginUI from "./LoginUI";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log(userName);
    console.log(password);

    // ユーザー名を取得
    const onUserNameChange = (value: string) => {
        setUserName(value);
    };

    // パスワードを取得
    const onPasswordChange = (value: string) => {
        setPassword(value);
    };

    // ボタンクリックで取得
    const onClickButton = async (value: boolean) => {
        if (value) {
            // コレクションを指定
            const usersRef = collection(db, "users");
            // フィールドの条件を指定
            const q = query(usersRef, where("username", "==", userName), where("password", "==", password));
            // 取得したものをスナップショットに格納
            const querySnapshot = await getDocs(q);
            // 取得したものを表示
            querySnapshot.forEach((doc) => {
                navigate("/");
                console.log("Document data:", doc.data());
            });
        }
    };

    return (
        <>
            {/* ログインUI */}
            <LoginUI userName={userName} onUserNameChange={onUserNameChange} password={password} onPasswordChange={onPasswordChange} onClickButton={onClickButton} />
        </>
    );
};

export default Login;
