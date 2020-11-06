import { IUser } from 'interface/User';
import { ReplaySubject } from 'rxjs';
import { tokenService } from './tokenService';

class UserService {
  private user$ = new ReplaySubject<IUser>(1);

  constructor() {
    tokenService.getToken().subscribe((token) => {
      const user = tokenService.decode<IUser>(token);
      if (!user) {
        return;
      }
      this.setUser(user);
    });
  }

  public setUser(user: IUser) {
    this.user$.next(user);
  }

  public getUser() {
    return this.user$.asObservable();
  }
}

export const userService = new UserService();
