import React, { useState } from 'react'
import EditProfileUI from './EditProfileUI';
import useUpdateFirebase from '../../hooks/useUpdateFirebase';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserid, changeUsername } from '../../features/userSlice';
import { RootState } from '../../app/store';

const EditProfile = () => {
    const userInfo = useSelector((state: RootState) => state.user);
    const [saveData, setSaveData] = useState({
        userid: userInfo.userid,
        username: userInfo.username,
    });
    const { update } = useUpdateFirebase();
    const dispatch = useDispatch();

    // ユーザーID
    const onUseridChange = (value: string) => {
        console.log(value);
        setSaveData({...saveData, userid: value})
    }

    // ユーザー名
    const onUserNameChange = (value: string) => {
        console.log(value);
        setSaveData({...saveData, username: value})
    }

    // パスワード
    const onUserPasswordChange = (value: string) => {
        console.log(value);
    }

    // 登録
    const onClickButton = async (value: boolean) => {
        if (value) {
            let result = await update("users", saveData.userid, saveData);
            if(result){
                dispatch(changeUserid(saveData.userid));
                dispatch(changeUsername(saveData.username));
            }
        }
    }

    return (
        <><EditProfileUI onUseridChange={onUseridChange} onUserNameChange={onUserNameChange} onClickButton={onClickButton} /></>
    )
}

export default EditProfile;
