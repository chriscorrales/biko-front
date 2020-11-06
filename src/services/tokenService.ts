import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { filter } from 'rxjs/operators';
import { storageService } from './storageService';

class TokenService {
  private token$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    storageService
      .get<string>('token')
      .pipe(filter((token) => !!token))
      .subscribe((token) => {
        this.token$ = new BehaviorSubject(token);
      });
  }

  public getToken(): Observable<string> {
    console.log('GET TOKEN', this.token$.value);
    return this.token$.asObservable();
  }

  public setToken(token: string) {
    console.log('SET TOKEN', token);
    this.token$.next(token);
    storageService.set<string>('token', token).subscribe();
  }

  public decode<T>(token: string) {
    try {
      const data = jwtDecode<T>(token);
      return data;
    } catch (err) {
      console.error(':(');
      return null;
    }
  }
}

export const tokenService = new TokenService();
