import { Card, Grid, Row, Text } from '@nextui-org/react'
import React from 'react'
import String from '../ui/input/String'
import Password from '../ui/input/Password'
import Submit from '../ui/action/Submit'

function Login() {
  return (
    <>
      <Grid.Container
        css={{
          height: '100vh',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_1280.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          css={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // 半透明にするために透明度を指定
            width: '500px',
            height: '600px',
          }}
        >
          <Card.Body>
            <Row justify="center" align="center" css={{height:"100px"}}>
              <Text h1 size={60} color="white" css={{ m: 0 ,letterSpacing: '0.1em',transform:'skew(-15deg)'}}>Login</Text>
            </Row>
            <Row justify="center" align="center" css={{height:"150px"}}>
              <String placeholder={"ユーザー名"} />
            </Row>
            <Row justify="center" align="center" css={{height:"50px"}}>
              <Password placeholder={"パスワード"} />
            </Row>
            <Row justify="center" align="center" css={{height:"300px"}}>
              <Submit buttonValue={"login"}/>
            </Row>
          </Card.Body>
        </Card>
      </Grid.Container>
    </>
  )
}

export default Login
