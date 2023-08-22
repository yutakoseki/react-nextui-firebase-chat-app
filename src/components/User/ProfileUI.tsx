import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Card, Grid } from "@nextui-org/react";
import profile from "./profile.module.scss";
import UserTopUI from "./UserInfo/UserTopUI";
import UserMiddleUI from "./UserInfo/UserMiddleUI";
import UserBottomUI from "./UserInfo/UserBottomUI";
import DashboardTopUI from "./Dashboard/DashboardTopUI";
import DashboardMiddleUI from "./Dashboard/DashboardMiddleUI";
import DashboardBottomUI from "./Dashboard/DashboardBottomUI";

const Profile = () => {
  return (
    <>
    <Header />
    <Grid.Container gap={1} className={profile.container}>
        <Grid xs={12} md={3}>
            <Card className={profile.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                <Card.Body>
                    <Grid.Container gap={1} className={profile.userInfoContainer}>
                        <Grid xs={12} className={profile.userInfoGridTop}>
                            {/* <UserTopUI /> */}
                        </Grid>
                        <Grid xs={12} className={profile.userInfoGridMiddle}>
                            <UserMiddleUI />
                        </Grid>
                        <Grid xs={12} className={profile.userInfoGridBottom}>
                            {/* <UserBottomUI /> */}
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </Grid>
        {/* スマホ版では非表示 */}
        <Grid xs={0} md={9}>
            <Card className={profile.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                <Card.Body>
                <Grid.Container gap={1} className={profile.dashboard}>
                        <Grid xs={12} className={profile.dashboardGridTop}>
                            <DashboardTopUI />
                        </Grid>
                        <Grid xs={12} className={profile.dashboardGridMiddle}>
                            <DashboardMiddleUI />
                        </Grid>
                        <Grid xs={12} className={profile.dashboardGridBottom}>
                            <DashboardBottomUI />
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </Grid>
    </Grid.Container>
</>
  )
}

export default Profile