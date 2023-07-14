import React from "react";
import { Card, Image, Text } from "@nextui-org/react";
import user from "../user.module.scss";

const UserTopUI = () => {
    return (
        <>
            <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
                <Card.Body>
                <Image
                    showSkeleton
                    width={200}
                    height={180}
                    maxDelay={10000}
                    src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                    alt="Default Image"
                    objectFit="cover"
                    />
                </Card.Body>
            </Card>
        </>
    );
};

export default UserTopUI;
