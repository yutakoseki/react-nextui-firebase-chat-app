import React from "react";
import { Button, Card, Image, Text } from "@nextui-org/react";
import scss from "../../User/edit.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const EditInfoTop = () => {
    const username = useSelector((state: RootState) => state.user.username);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClickSaveEdit = (): void => {
        navigate("/user");
    };

    return (
        <>
            <Card className={scss.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                    <Image showSkeleton width={200} height={180} maxDelay={10000} src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true" alt="Default Image" objectFit="cover" style={{ borderRadius: "50%", overflow: "hidden" }} />
                    <Text h3 css={{ textAlign: "center", marginTop: "10px" }}>
                        {username}
                    </Text>
                    <Button css={{ textAlign: "center", marginTop: "20px" }} color="primary" auto onClick={handleClickSaveEdit}>
                        {t("profile.Save Profile")}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default EditInfoTop;
