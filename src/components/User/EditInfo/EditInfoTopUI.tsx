import React from "react";
import { Button, Card, Image, Input, Text } from "@nextui-org/react";
import scss from "../../User/edit.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


interface EditProfileProps {
    // userName: string;
    // password: string;
    onUserNameChange: (value: string) => void;
    // onPasswordChange: (value: string) => void;
    onClickButton: (value: boolean) => void;
}

const EditInfoTop = ({onUserNameChange, onClickButton}:EditProfileProps) => {
    const username = useSelector((state: RootState) => state.user.username);
    const { t } = useTranslation();
    const navigate = useNavigate();

    // ユーザー名
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onUserNameChange(value);
    }

    // データをEditProfileへ
    const handleClickSaveEdit = (): void => {
        onClickButton(true);
        navigate("/user");
    };

    return (
        <>
            <Card className={scss.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body style={{alignItems: "center"}}>
                    <Image showSkeleton width={200} height={180} maxDelay={10000} src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true" alt="Default Image" objectFit="cover" style={{ borderRadius: "50%", overflow: "hidden" }} />
                    <Input className={scss.input}
                        clearable
                        underlined
                        labelPlaceholder={t("profile.Name")}
                        initialValue={username}
                        width="80%"
                        style={{ textAlign: "center", fontSize: "18px" }}
                        css={{marginTop: "50px", marginBottom: "20px"}}
                        onChange={handleNameChange}
                    />
                    <Button css={{ textAlign: "center", marginTop: "20px" }} color="primary" auto onClick={handleClickSaveEdit}>
                        {t("profile.Save Profile")}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default EditInfoTop;
