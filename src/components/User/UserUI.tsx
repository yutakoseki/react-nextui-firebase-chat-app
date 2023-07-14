import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Card, Grid, Text } from "@nextui-org/react";
import user from "./user.module.scss";
import UserTopUI from "./UserInfo/UserTopUI";
import UserMiddleUI from "./UserInfo/UserMiddleUI";
import UserBottomUI from "./UserInfo/UserBottomUI";
import DashboardTopUI from "./Dashboard/DashboardTopUI";
import DashboardMiddleUI from "./Dashboard/DashboardMiddleUI";
import DashboardBottomUI from "./Dashboard/DashboardBottomUI";

const UserUI = () => {
    const username = useSelector((state: RootState) => state.user.username);
    const password = useSelector((state: RootState) => state.user.password);
    return (
        <>
            <Header />
            <Grid.Container gap={1} className={user.container}>
                <Grid xs={12} md={3}>
                    <Card className={user.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={user.userInfoContainer}>
                                <Grid xs={12} className={user.userInfoGridTop}>
                                    <UserTopUI />
                                </Grid>
                                <Grid xs={12} className={user.userInfoGridMiddle}>
                                    <UserMiddleUI />
                                </Grid>
                                <Grid xs={12} className={user.userInfoGridBottom}>
                                    <UserBottomUI />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Grid>
                {/* スマホ版では非表示 */}
                <Grid xs={0} md={9}>
                    <Card className={user.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                        <Grid.Container gap={1} className={user.dashboard}>
                                <Grid xs={12} className={user.dashboardGridTop}>
                                    <DashboardTopUI />
                                </Grid>
                                <Grid xs={12} className={user.dashboardGridMiddle}>
                                    <DashboardMiddleUI />
                                </Grid>
                                <Grid xs={12} className={user.dashboardGridBottom}>
                                    <DashboardBottomUI />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default UserUI;
