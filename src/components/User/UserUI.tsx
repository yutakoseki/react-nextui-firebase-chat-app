import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Card, Grid } from "@nextui-org/react";
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
            <Grid.Container className={user.wrapper}>
                <Grid xs={12} md={3} className={user.userInfoWrapper}>
                    <Card className={user.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={user.userInfoContainer}>
                                <Grid xs={12} className={user.userInfoGridTop}>
                                    <UserTopUI />
                                </Grid>
                                <Grid xs={12} className={user.userInfoGridBottom}>
                                    <UserBottomUI />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} md={9} className={user.userDashboardWrapper}>
                    <Card className={user.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={user.dashboardContainer}>
                                <Grid xs={12} className={user.dashboardGridTop}>
                                    <DashboardTopUI />
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
