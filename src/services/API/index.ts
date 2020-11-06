import axios, { Method } from 'axios';
import { throwError, of, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { tokenService } from 'services/tokenService';
import ApiError from './ApiError';
import { API_BIKO } from '../../settings';

const API_TIMEOUT = 30000;

class Api {
  public request<T>(
    method: Method,
    endpoint: string,
    data: any = null,
    noAuthorization: boolean
  ) {
    const url = `${API_BIKO}${endpoint}`;

    return of(true).pipe(
      switchMap(() => (noAuthorization ? of(null) : this.getBearerToken())),
      map((token) => (token ? { Authorization: token } : null)),
      switchMap((headers) => {
        console.log(headers);

        return from(
          axios.request<T>({
            url,
            method,
            timeout: API_TIMEOUT,
            headers: { ...headers },
            params: method === 'GET' ? data : null,
            data: ['POST', 'PUT'].includes(method) ? data : null,
            responseType: 'json',
          })
        );
      }),
      map((response) => response.data),
      catchError((err) =>
        throwError(new ApiError(err.config, err.response, err))
      )
    );
  }

  public getBearerToken() {
    return tokenService
      .getToken()
      .pipe(map((token) => (token ? `Bearer ${token}` : null)));
  }

  public get<T = any>(
    url: string,
    params?: any,
    noAuthorization: boolean = false
  ) {
    return this.request<T>('GET', url, params, noAuthorization);
  }

  public post<T = any>(
    url: string,
    body: any,
    noAuthorization: boolean = false
  ) {
    return this.request<T>('POST', url, body, noAuthorization);
  }

  public put<T = any>(
    url: string,
    body: any,
    noAuthorization: boolean = false
  ) {
    return this.request<T>('PUT', url, body, noAuthorization);
  }

  public delete<T = any>(
    url: string,
    params?: any,
    noAuthorization: boolean = false
  ) {
    return this.request<T>('DELETE', url, params, noAuthorization);
  }
}

export const apiService = new Api();
