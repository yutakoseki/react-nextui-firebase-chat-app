import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import dashboardtop from "./dashboardtop.module.scss";
import { Link } from "react-router-dom";

const DashboardTopUI = () => {
    return (
        <>
            <Grid.Container gap={1} className={dashboardtop.GridContainer}>
                <Grid xs={12} md={6}>
                    <Card className={dashboardtop.dashboardTop} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                        <Card.Body>
                            <Text>自己紹介</Text>
                            <Text>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</Text>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} md={6}>
                    <Card className={dashboardtop.dashboardTopRight} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                        <Card.Body>
                            <Text>SNS情報</Text>

                            <Grid.Container gap={1}>
                                <Grid xs={12} md={3}>
                                    X（旧 twitter）
                                </Grid>
                                <Grid xs={0} md={1}>
                                    ：
                                </Grid>
                                <Grid xs={1} md={0}>
                                    ▶
                                </Grid>
                                <Grid xs={11} md={8}>
                                    <Link to="#" className={dashboardtop.link}>
                                        @test
                                    </Link>
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={1}>
                                <Grid xs={12} md={3}>
                                    youtube
                                </Grid>
                                <Grid xs={0} md={1}>
                                    ：
                                </Grid>
                                <Grid xs={1} md={0}>
                                    ▶
                                </Grid>
                                <Grid xs={11} md={8}>
                                    <Link to="#" className={dashboardtop.link}>
                                        @test
                                    </Link>
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={1}>
                                <Grid xs={12} md={3}>
                                    Instagram
                                </Grid>
                                <Grid xs={0} md={1}>
                                    ：
                                </Grid>
                                <Grid xs={1} md={0}>
                                    ▶
                                </Grid>
                                <Grid xs={11} md={8}>
                                    <Link to="#" className={dashboardtop.link}>
                                        @test
                                    </Link>
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={1}>
                                <Grid xs={12} md={3}>
                                    niconico動画
                                </Grid>
                                <Grid xs={0} md={1}>
                                    ：
                                </Grid>
                                <Grid xs={1} md={0}>
                                    ▶
                                </Grid>
                                <Grid xs={11} md={8}>
                                    <Link to="#" className={dashboardtop.link}>
                                        @test
                                    </Link>
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={1}>
                                <Grid xs={12} md={3}>
                                    tictok
                                </Grid>
                                <Grid xs={0} md={1}>
                                    ：
                                </Grid>
                                <Grid xs={1} md={0}>
                                    ▶
                                </Grid>
                                <Grid xs={11} md={8}>
                                    <Link to="#" className={dashboardtop.link}>
                                        @test
                                    </Link>
                                </Grid>
                            </Grid.Container>

                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default DashboardTopUI;
