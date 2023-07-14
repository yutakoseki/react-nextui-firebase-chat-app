import React from 'react'
import { Card, Text } from "@nextui-org/react";
import user from "../user.module.scss";

const UserMiddleUI = () => {
  return (
    <>        <>
    <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
        <Card.Body>
            <Text>UserInfo Middle</Text>
        </Card.Body>
    </Card>
</></>
  )
}

export default UserMiddleUI