import { IUser } from 'interface/User';
import { ReplaySubject } from 'rxjs';
import { jobService } from './jobService';
import { tokenService } from './tokenService';
import { vacancyService } from './vacancyService';

class UserService {
  private user$ = new ReplaySubject<IUser>(1);
  private isAuthentication = false;

  constructor() {
    tokenService.getToken().subscribe((token) => {
      const user = tokenService.decode<IUser>(token);

      if (!user) {
        return;
      }

      if (user.requestor) {
        jobService.loadJobs();
      }

      if (user.freelancer) {
        vacancyService.loadJobsByCategory();
      }

      this.isAuthentication = true;
      this.setUser(user);
    });
  }

  public setUser(user: IUser) {
    this.user$.next(user);
  }

  public getIsAuthentication(): boolean {
    return this.isAuthentication;
  }

  public getUser() {
    return this.user$.asObservable();
  }
}

export const userService = new UserService();
