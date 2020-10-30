import { Col, Form, Input, Switch, Typography } from 'antd';
import BikoLogo from 'components/shared/icons/BikoLogo';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ActionsContainer,
  BackgroundGradientRow,
  ButtonSubmit,
  CardLogin,
  ItemCenter,
  RememberMe,
} from './styles';
// onClick={() => push('/home')}

const Login: React.FC = () => {
  const { push } = useHistory();

  return (
    <BackgroundGradientRow
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col span={7}>
        <CardLogin bordered={false}>
          <Form>
            <ItemCenter>
              <BikoLogo type="large" />
            </ItemCenter>
            <Form.Item>
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="Senha" />
            </Form.Item>
            <ActionsContainer>
              <RememberMe style={{ width: '49%' }}>
                <Typography.Text style={{ marginRight: '8px' }}>
                  Lembrar-me
                </Typography.Text>
                <Switch />
              </RememberMe>
              <ButtonSubmit
                style={{ width: '49%' }}
                onClick={() => {}}
                type="default"
                block
              >
                Entrar
              </ButtonSubmit>
            </ActionsContainer>
            <ItemCenter style={{ marginTop: '18px' }}>
              <Typography.Text>Não tem uma conta?&nbsp;</Typography.Text>
              <Typography.Link underline ellipsis>
                Cadastra-se
              </Typography.Link>
            </ItemCenter>
          </Form>
        </CardLogin>
      </Col>
    </BackgroundGradientRow>
  );
};

export default Login;
