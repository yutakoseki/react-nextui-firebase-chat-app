import React from "react";
import { Card, Grid, Input, Table, Text } from "@nextui-org/react";
import user from "../user.module.scss";

interface EditProfileProps {
    onUserAgeChange: (value: number) => void;
}

const EditBottomUI = ({ onUserAgeChange }: EditProfileProps) => {
    const userid = 1;
    // ユーザーID
    const handleUserAgeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        const numericValue = parseInt(value, 10);
        onUserAgeChange(numericValue);
    };
    return (
        <>
            {" "}
            <>
                <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                    <Card.Body>
                        <Text>アーティスト情報</Text>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>年齢</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>性別</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>活動場所</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>出身地</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>影響を受けたアーティスト</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                            <Grid xs={6}>
                                <Text>ジャンル</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Input clearable underlined initialValue="aaaa" onChange={handleUserAgeChange} />
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                </Card>
            </>
        </>
    );
};

export default EditBottomUI;
