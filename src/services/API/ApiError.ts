import { AxiosRequestConfig, AxiosResponse } from 'axios';
import ServiceError from './ServiceError';

interface IApiErrorMeta {
  request: {
    baseURL?: string;
    url?: string;
    method?: string;
    params: any;
    data: any;
    headers: any;
  };
  response?: {
    status: number;
    data?: any;
  };
  err: any;
}

class ApiError<T> extends ServiceError<IApiErrorMeta> {
  public readonly status: number;

  public readonly data: T;

  constructor(
    request: AxiosRequestConfig,
    axiosResponse: AxiosResponse,
    err: any
  ) {
    const response = !axiosResponse
      ? { status: -1, data: '' }
      : { status: axiosResponse.status, data: axiosResponse.data };

    const code = response?.data?.code;

    const message =
      response.status === -1
        ? 'Erro ao acessar servidores, verifique sua conexão com a internet e tente novamente'
        : code
        ? response.data.message
        : 'Não foi possível se comunicar com nossos servidores. Tente novamente mais tarde';

    super(
      message,
      {
        request: {
          baseURL: request.baseURL,
          url: request.url,
          method: request.method,
          params: request.params,
          data: request.data,
          headers: request.headers,
        },
        response,
        err,
      },
      false
    );

    this.status = response.status;
    this.data = response.data;
  }
}

export default ApiError;
