import axios, { Method } from 'axios';
import { throwError, of, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import ApiError from './ApiError';
import { API_BIKO } from '../../settings';

const API_TIMEOUT = 30000;

class Api {
  public request<T>(method: Method, endpoint: string, data: any = null) {
    const url = `${API_BIKO}${endpoint}`;
    console.log('API_BIKO', API_BIKO);

    return of(true).pipe(
      switchMap(() => {
        return from(
          axios.request<T>({
            url,
            method,
            timeout: API_TIMEOUT,
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

  public get<T = any>(url: string, params?: any) {
    return this.request<T>('GET', url, params);
  }

  public post<T = any>(url: string, body: any) {
    return this.request<T>('POST', url, body);
  }

  public put<T = any>(url: string, body: any) {
    return this.request<T>('PUT', url, body);
  }

  public delete<T = any>(url: string, params?: any) {
    return this.request<T>('DELETE', url, params);
  }
}

export const apiService = new Api();
