import React from "react";
import { Card, Text } from "@nextui-org/react";
import user from "../user.module.scss";

const DashboardMiddleUI = () => {
    return (
        <>
            <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                    <Text>Dashboard Top</Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default DashboardMiddleUI;
