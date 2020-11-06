import { Button, Col, Space, Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React from 'react';
import { useObservable } from 'react-use-observable';
import { userService } from 'services/userService';
import { BackgroundGradientRow, CardLogin } from '../styles';
import { Container, UserImage } from './styles';

const ProfileSelect: React.FC = () => {
  const [user] = useObservable(() => userService.getUser(), []);

  if (!user) {
    return null;
  }

  return (
    <BackgroundGradientRow
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col span={7}>
        <CardLogin bordered={false}>
          <Container>
            <Space direction="vertical" align="center" size="large">
              <Typography.Title style={{ textAlign: 'center' }} level={2}>
                Bem vindo, {user.fullName.split(' ')[0]}
              </Typography.Title>
              <UserImage>
                <img alt="Imagem do Perfil" src={user.image} />
              </UserImage>
              <Typography.Text>
                Por favor, escolha em qual sistema deseja entrar
              </Typography.Text>
              <ButtonGroup>
                <Button>Solicitante</Button>
                <Button>Freelancer</Button>
              </ButtonGroup>
            </Space>
          </Container>
        </CardLogin>
      </Col>
    </BackgroundGradientRow>
  );
};

export default ProfileSelect;
