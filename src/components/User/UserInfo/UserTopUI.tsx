import React from "react";
import { Button, Card, Image, Text } from "@nextui-org/react";
import userTop from "./userTop.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const UserTopUI = () => {
    const user = useSelector((state: RootState) => state.user);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClickToEditProfile = (): void => {
        navigate("/profile/edit");
    };

    const handleClickToMessage = (): void => {
        navigate("/messageList");
    };

    return (
        <>
            <Card className={userTop.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                    <Image showSkeleton width={150} height={180} maxDelay={10000} src={user.photoURL} alt="Default Image" objectFit="cover" />
                    <Text size="$md" css={{ textAlign: "center" }}>
                        @{user.userid}
                    </Text>
                    <Text h4 css={{ textAlign: "center" }}>
                        {user.username}
                    </Text>
                    <Button css={{ textAlign: "center" }} color="primary" auto onClick={handleClickToEditProfile}>
                        {t("user.edit Mypage")}
                    </Button>
                    <Button css={{ textAlign: "center", marginTop: "20px" }} color="primary" auto onClick={handleClickToMessage}>
                        {t("user.message")}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default UserTopUI;
