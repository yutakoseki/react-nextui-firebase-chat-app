import React, { useState } from 'react'
import EditProfileUI from './EditProfileUI';
import useSelectFirebase from '../../hooks/useSelectFirebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const EditProfile = () => {
    const userid = useSelector((state: RootState) => state.user.userid);
    const { getDocument } = useSelectFirebase();
    const [username, setUsername] = useState("");

    // ユーザー名
    const onUserNameChange = (value: string) => {
        console.log(value);
        setUsername(value);
    }

    // パスワード
    const onUserPasswordChange = (value: string) => {
        console.log(value);
    }

    // 登録
    const onClickButton = async (value: boolean) => {
        if (value) {
            let document = await getDocument("users", userid, "userid");
            debugger;
            console.log(document);
        }
    }

    return (
        <><EditProfileUI onUserNameChange={onUserNameChange} onClickButton={onClickButton} /></>
    )
}

export default EditProfile;
