import React from "react";
import Header from "../Header/Header";
import { Card, Grid } from "@nextui-org/react";
import edit from "./edit.module.scss";
import UserBottomUI from "./UserInfo/UserBottomUI";
import DashboardTopUI from "./Dashboard/DashboardTopUI";
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
            <Grid.Container className={edit.wrapper}>
                <Grid xs={12} md={3} className={edit.userInfoWrapper}>
                    <Card className={edit.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={edit.userInfoContainer}>
                                <Grid xs={12} className={edit.userInfoGridTop}>
                                    <EditInfoTop onClickButton={onClickButton} onUseridChange={onUseridChange} onUserNameChange={onUserNameChange} />
                                </Grid>
                                <Grid xs={12} className={edit.userInfoGridBottom}>
                                    <UserBottomUI />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Grid>
                {/* スマホ版では非表示 */}
                <Grid xs={12} md={9} className={edit.dashboardWrapper}>
                    <Card className={edit.card} css={{ $$cardColor: "$colors$baseBlackColor" }}>
                        <Card.Body>
                            <Grid.Container gap={1} className={edit.dashboardContainer}>
                                <Grid xs={12} className={edit.dashboardGridTop}>
                                    <DashboardTopUI />
                                </Grid>
                                <Grid xs={12} className={edit.dashboardGridBottom}>
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
