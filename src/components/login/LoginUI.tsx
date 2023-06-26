import React from 'react';
import { Button, Card, Grid, Input, Row, Text } from '@nextui-org/react';

interface LoginProps {
  userName: string;
  onUserNameChange: (value: string) => void;
}

const LoginUI = ({ userName, onUserNameChange }: LoginProps) => {
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const value = event.target.value;
    onUserNameChange(value);
  };

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
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            width: '500px',
            height: '600px',
          }}
        >
          <Card.Body>
            <Row justify="center" align="center" css={{ height: '100px' }}>
              <Text h1 size={60} color="white" css={{ m: 0, letterSpacing: '0.1em', transform: 'skew(-15deg)' }}>
                Login
              </Text>
            </Row>
            <Row justify="center" align="center" css={{ height: '150px' }}>
              <Input
                bordered
                labelPlaceholder="ユーザー名"
                color="secondary"
                width="70%"
                onChange={handleNameChange}
              />
            </Row>
            <Row justify="center" align="center" css={{ height: '50px' }}>
              <Input.Password bordered labelPlaceholder="パスワード" color="secondary" width="70%" />
            </Row>
            <Row justify="center" align="center" css={{ height: '300px' }}>
              <Button shadow color="gradient" css={{ width: '70%' }}>
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
