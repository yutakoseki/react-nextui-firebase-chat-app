import React from 'react'
import { Card, Text } from '@nextui-org/react'
import user from "../user.module.scss";

const UserBottomUI = () => {
  return (
    <>        <>
    <Card className={user.card} css={{ $$cardColor: "$colors$baseGrayColor" }}>
        <Card.Body>
            <Text>UserInfo Bottom</Text>
        </Card.Body>
    </Card>
</></>
  )
}

export default UserBottomUI