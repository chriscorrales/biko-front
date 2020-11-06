import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';

class Storage {
  public get<T = any>(key: string): Observable<T> {
    return of(true).pipe(
      map(() => localStorage.getItem(key)),
      map((data) => (data ? JSON.parse(data) : null))
    );
  }

  public set<T = any>(key: string, value: T): Observable<T> {
    return of(true).pipe(
      map(() => localStorage.setItem(key, JSON.stringify(value))),
      map(() => value)
    );
  }

  public clear(regexp?: RegExp): Observable<void> {
    return of(true).pipe(
      map(() => {
        if (!regexp) {
          return localStorage.clear();
        }

        Object.keys(localStorage)
          .filter((k) => regexp.test(k))
          .forEach((key) => localStorage.removeItem(key));
      })
    );
  }
}

export const storageService = new Storage();
