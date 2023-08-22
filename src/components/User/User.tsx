import React, { useEffect, useState } from 'react'
import UserUI from './UserUI'
import { useArtistDataFirebase } from '../../hooks/useSelectFirebase'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface UserData {
    userid: string;
    username: string;
    password: string;
    photoURL: string;
    language: string;
    age: number;
    gender: string;
    hometown: string;
    address: string;
    influenced_artist: string;
    genre: string;
}

const User = () => {
    const userid = useSelector((state: RootState) => state.user.userid);
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const { select } = useArtistDataFirebase();

    useEffect(() => {
        const fetchData = async () => {
            const artistDataRaw = await select("users", "userid", userid);
            setUserData(artistDataRaw[0]);
        };
        fetchData();
    }, [userid]);

    return (
        <>
            <UserUI userData={userData} />
        </>
    );
}

export default User