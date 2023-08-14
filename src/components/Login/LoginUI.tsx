import React from "react";
import { Button, Card, Grid, Input, Row, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

interface LoginProps {
    userid: string;
    password: string;
    errmsg: string;
    onUserIdChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onClickButton: (value: boolean) => void;
}

const LoginUI = ({ onUserIdChange, onPasswordChange, onClickButton, errmsg }: LoginProps) => {
    let { t } = useTranslation();
    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onUserIdChange(value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onPasswordChange(value);
    };

    const handleClick = (): void => {
      onClickButton(true);
    }

    return (
        <>
            <Grid.Container
                css={{
                    height: "100vh",
                    backgroundImage: "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card
                    css={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        width: "500px",
                        height: "600px",
                    }}
                >
                    <Card.Body>
                        <Row justify="center" align="center" css={{ height: "100px" }}>
                            <Text h1 size={60} color="white" css={{ m: 0, letterSpacing: "0.1em", transform: "skew(-15deg)" }}>
                                Login
                            </Text>
                        </Row>
                        <Row justify="center" align="center" css={{ height: "150px" }}>
                            <Input bordered labelPlaceholder="ユーザーID" color="secondary" width="70%" onChange={handleIdChange} />
                        </Row>
                        <Row justify="center" align="center" css={{ height: "50px" }}>
                            <Input.Password bordered labelPlaceholder="パスワード" color="secondary" width="70%" onChange={handlePasswordChange} />
                        </Row>
                            {errmsg ? (<Text color="error">{t("error.inCorrectIdPassword")}</Text>) : ("")}
                        <Row justify="center" align="center" css={{ height: "300px" }}>
                            <Button shadow color="gradient" css={{ width: "70%" }} onClick={handleClick}>
                                login
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Grid.Container>
        </>
    );
};

export default LoginUI;
