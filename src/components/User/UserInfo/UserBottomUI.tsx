import React from "react";
import { Card, Grid, Table, Text } from "@nextui-org/react";
import user from "../user.module.scss";
import { useArtistDataFirebase } from "../../../hooks/useSelectFirebase";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface UserProps {
    userData: {
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
    };
}

const UserBottomUI = ({ userData }: UserProps) => {
    return (
        <>
            <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                    <Text>アーティスト情報</Text>

                    <Grid.Container gap={1}>
                        <Grid xs={6}>
                            <Text>年齢</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.age !== undefined ? userData.age : ""}</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>性別</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.gender || ""}</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>活動場所</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.address || ""}</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>出身地</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.hometown || ""}</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>ジャンル</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.genre || ""}</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>影響を受けたアーティスト</Text>
                        </Grid>
                        <Grid xs={6}>
                            <Text>{userData.influenced_artist || ""}</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default UserBottomUI;
