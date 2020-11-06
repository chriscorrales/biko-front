import { Col, Form, Switch, Typography } from 'antd';
import Field from 'components/shared/Field';
import BikoLogo from 'components/shared/icons/BikoLogo';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { tokenService } from 'services/tokenService';
import { userService } from 'services/userService';
import { IUser } from 'interface/User';
import {
  ActionsContainer,
  BackgroundGradientRow,
  ButtonSubmit,
  CardLogin,
  ItemCenter,
  RememberMe,
} from './styles';
import { ILogin, LoginSchema, loginService } from './LoginService';

const Login: React.FC = () => {
  const history = useHistory();
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (values: ILogin) => {
    loginService.login(values).subscribe((token) => {
      tokenService.setToken(token);
      const user = tokenService.decode<IUser>(token);
      if (!user) {
        return;
      }

      if (user.requestorId && user.freelancerId) {
        history.push('/profile');
      }

      if (user.requestorId) {
        history.push('/requestor/home');
      }

      if (user.freelancerId) {
        history.push('/freelancer/home');
      }

      userService.setUser(user);
    });
  };

  return (
    <BackgroundGradientRow
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col span={7}>
        <CardLogin bordered={false}>
          <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
              <ItemCenter>
                <BikoLogo type="large" />
              </ItemCenter>
              <Field
                name="email"
                formItemProps={{ label: 'Email' }}
                inputProps={{
                  type: 'email',
                  placeholder: 'Digite um e-mail válido',
                }}
              />
              <Field
                name="password"
                formItemProps={{ label: 'Senha' }}
                inputProps={{
                  type: 'password',
                  placeholder: 'Mínimo 6 caracteres',
                }}
              />
              <ActionsContainer>
                <RememberMe style={{ width: '49%' }}>
                  <Typography.Text style={{ marginRight: '8px' }}>
                    Lembrar-me
                  </Typography.Text>
                  <Switch />
                </RememberMe>
                <ButtonSubmit
                  htmlType="submit"
                  style={{ width: '49%' }}
                  type="default"
                  block
                >
                  Entrar
                </ButtonSubmit>
              </ActionsContainer>
              <ItemCenter style={{ marginTop: '18px' }}>
                <Typography.Text>Não tem uma conta?&nbsp;</Typography.Text>
                <Typography.Link
                  onClick={() => history.push('/register')}
                  underline
                  ellipsis
                >
                  Cadastre-se
                </Typography.Link>
              </ItemCenter>
            </Form>
          </FormProvider>
        </CardLogin>
      </Col>
    </BackgroundGradientRow>
  );
};

export default Login;
