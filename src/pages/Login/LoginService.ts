import Yup from 'components/Util/Yup';
import { apiService } from 'services/API';

export interface ILogin {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'E-mail inválido'
    )
    .required(),
  password: Yup.string()
    .required()
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

class LoginService {
  public login(loginData: ILogin) {
    return apiService.post('/auth', loginData, true);
  }
}

export const loginService = new LoginService();
