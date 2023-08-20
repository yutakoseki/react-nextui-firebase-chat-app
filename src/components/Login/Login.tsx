import React, { useState } from "react";
import LoginUI from "./LoginUI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUsername, changePassword, changeUserid, changePhotoURL } from "../../features/userSlice";
import { useLoginUserFirebase } from '../../hooks/useSelectFirebase'

const Login = () => {
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [errmsg, setErrorMsg] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectLoginUser } = useLoginUserFirebase();

    // ユーザー名を取得
    const onUserIdChange = (value: string) => {
        setUserid(value);
    };

    // パスワードを取得
    const onPasswordChange = (value: string) => {
        setPassword(value);
    };

    // ボタンクリックで取得
    const onClickButton = async (value: boolean) => {
        if (value) {
            let result = await selectLoginUser("users", "userid", userid, "password", password);
            if(result){
                dispatch(changeUserid(result[0].userid));
                dispatch(changeUsername(result[0].username));
                dispatch(changePassword(result[0].password));
                dispatch(changePhotoURL(result[0].photoURL));
                navigate("/user");
            }else{
                setErrorMsg("login: The username or password is incorrect.");
            }
        }
    };

    return (
        <>
            {/* ログインUI */}
            <LoginUI userid={userid} onUserIdChange={onUserIdChange} password={password} onPasswordChange={onPasswordChange} onClickButton={onClickButton} errmsg={errmsg} />
        </>
    );
};

export default Login;
