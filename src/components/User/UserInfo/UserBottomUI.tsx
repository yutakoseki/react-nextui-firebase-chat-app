import React from "react";
import { Card, Grid, Table, Text } from "@nextui-org/react";
import user from "../user.module.scss";

const UserBottomUI = () => {
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
                                <Text>代表作品</Text>
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>性別</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>代表作品</Text>
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>活動場所</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>代表作品</Text>
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>出身地</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>代表作品</Text>
                            </Grid>
                        </Grid.Container>
                        <Grid.Container gap={1}>
                            <Grid xs={6}>
                                <Text>影響を受けたアーティスト</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>代表作品</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>ジャンル</Text>
                            </Grid>
                            <Grid xs={6}>
                                <Text>代表作品</Text>
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                </Card>
            </>
        </>
    );
};

export default UserBottomUI;
