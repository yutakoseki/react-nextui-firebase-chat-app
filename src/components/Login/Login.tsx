import React, { useState } from "react";
import LoginUI from "./LoginUI";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUsername, changePassword, changeUserid } from "../../features/userSlice";

interface User {
    userid: string;
    username: string;
    password: string;
}

const Login = () => {
    const [user, setUser] = useState<User[]>([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user);

    // ユーザー名を取得
    const onUserNameChange = (value: string) => {
        setUsername(value);
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
            const q = query(usersRef, where("username", "==", username), where("password", "==", password));
            // 取得したものをスナップショットに格納
            const querySnapshot = await getDocs(q);
            // 展開したdocデータを格納する配列
            const loginUser:User[] = [];
            // 取得したものを表示
            querySnapshot.forEach((doc) => {
                loginUser.push({
                    userid: doc.data().userid,
                    username: doc.data().username,
                    password: doc.data().password,
                })
                dispatch(changeUserid(loginUser[0].userid));
                dispatch(changeUsername(loginUser[0].username));
                dispatch(changePassword(loginUser[0].password));
                setUser(loginUser);
                navigate("/user");
                console.log("Document data:", doc.data());
            });
        }
    };

    return (
        <>
            {/* ログインUI */}
            <LoginUI userName={username} onUserNameChange={onUserNameChange} password={password} onPasswordChange={onPasswordChange} onClickButton={onClickButton} />
        </>
    );
};

export default Login;
