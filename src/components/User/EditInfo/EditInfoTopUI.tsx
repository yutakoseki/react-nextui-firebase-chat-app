import React from "react";
import { Button, Card, Grid, Image, Input, Text } from "@nextui-org/react";
import editTop from "./editTop.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface EditProfileProps {
    // userName: string;
    // password: string;
    onUseridChange: (value: string) => void;
    onUserNameChange: (value: string) => void;
    // onPasswordChange: (value: string) => void;
    onClickButton: (value: boolean) => void;
}

const EditInfoTop = ({ onUseridChange, onUserNameChange, onClickButton }: EditProfileProps) => {
    const userid = useSelector((state: RootState) => state.user.userid);
    const username = useSelector((state: RootState) => state.user.username);
    const photoURL = useSelector((state: RootState) => state.user.photoURL);
    const { t } = useTranslation();
    const navigate = useNavigate();

    // ユーザーID
    const handleUseridChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onUseridChange(value);
    };

    // ユーザー名
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onUserNameChange(value);
    };

    // データをEditProfileへ
    const handleClickSaveEdit = (): void => {
        onClickButton(true);
        navigate("/user");
    };

    // データをEditProfileへ
    const handleClickCancelEdit = (): void => {
        navigate("/user");
    };

    return (
        <>
            <Card className={editTop.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body style={{ alignItems: "center" }}>
                    <Image className={editTop.image} showSkeleton width={100} height={100} maxDelay={10000} src={photoURL} alt="Default Image" objectFit="cover" />
                    <Input className={editTop.userid} clearable underlined labelPlaceholder={t("profile.Userid")} initialValue={userid} width="80%" size="xs" style={{ textAlign: "center", fontSize: "16px" }} onChange={handleUseridChange} />
                    <Input className={editTop.input} clearable underlined labelPlaceholder={t("profile.Name")} initialValue={username} width="80%" size="xs" style={{ textAlign: "center", fontSize: "16px" }} onChange={handleNameChange} />
                    <Grid.Container>
                        <Grid md={6}>
                            <Button css={{ textAlign: "center", marginTop: "20px", width: "100%", marginRight: "5px" }} color="secondary" auto onClick={handleClickCancelEdit}>
                                {t("global.Cancel")}
                            </Button>
                        </Grid>
                        <Grid md={6}>
                            <Button css={{ textAlign: "center", marginTop: "20px", width: "100%", marginLeft: "5px" }} color="primary" auto onClick={handleClickSaveEdit}>
                                {t("global.Save")}
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default EditInfoTop;
