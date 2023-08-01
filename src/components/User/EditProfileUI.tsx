import React from "react";
import Header from "../Header/Header";
import { Card, Grid } from "@nextui-org/react";
import scss from "./edit.module.scss";
import UserMiddleUI from "./UserInfo/UserMiddleUI";
import UserBottomUI from "./UserInfo/UserBottomUI";
import DashboardTopUI from "./Dashboard/DashboardTopUI";
import DashboardMiddleUI from "./Dashboard/DashboardMiddleUI";
import DashboardBottomUI from "./Dashboard/DashboardBottomUI";
import EditInfoTop from "./EditInfo/EditInfoTopUI";

interface EditProfileProps {
    // userName: string;
    // password: string;
    onUseridChange: (value: string) => void;
    onUserNameChange: (value: string) => void;
    // onPasswordChange: (value: string) => void;
    onClickButton: (value: boolean) => void;
}

const EditProfileUI = ({onUseridChange, onUserNameChange, onClickButton }: EditProfileProps) => {
    return (
        <>
            <Header />
            <Grid.Container gap={1} className={scss.container}>
                <Grid xs={12} md={3}>
                    <Card className={scss.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={scss.userInfoContainer}>
                                <Grid xs={12} className={scss.userInfoGridTop}>
                                    <EditInfoTop onClickButton={onClickButton} onUseridChange={onUseridChange} onUserNameChange={onUserNameChange} />
                                </Grid>
                                <Grid xs={12} className={scss.userInfoGridMiddle}>
                                    <UserMiddleUI />
                                </Grid>
                                <Grid xs={12} className={scss.userInfoGridBottom}>
                                    <UserBottomUI />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Grid>
                {/* スマホ版では非表示 */}
                <Grid xs={0} md={9}>
                    <Card className={scss.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={scss.dashboard}>
                                <Grid xs={12} className={scss.dashboardGridTop}>
                                    <DashboardTopUI />
                                </Grid>
                                <Grid xs={12} className={scss.dashboardGridMiddle}>
                                    <DashboardMiddleUI />
                                </Grid>
                                <Grid xs={12} className={scss.dashboardGridBottom}>
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

export default EditProfileUI;
