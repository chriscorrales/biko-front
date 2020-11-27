import { apiService } from 'services/API';

class RegisterService {
  public createUser(values: any) {
    return apiService.post(`/user/create`, values);
  }
}

export const registerService = new RegisterService();
