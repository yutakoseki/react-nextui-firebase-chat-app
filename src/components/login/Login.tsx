import React, { useState } from "react";
import LoginUI from "./LoginUI";

const Login = () => {
  const [userName, setUserName] = useState('');
  console.log(userName);

  const onUserNameChange = (value: string) => {
    setUserName(value);
  };
    return (
        <>
            {/* ログインUI */}
            <LoginUI userName={userName} onUserNameChange={onUserNameChange}/>
        </>
    );
}

export default Login;
