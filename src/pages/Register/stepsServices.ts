import { BehaviorSubject } from 'rxjs';

export enum enStep {
  PROFILE = 0,
  ADDRESS = 1,
  PERSON = 2,
  LINK = 3,
  ACESS = 4,
}

class StepService {
  private current = new BehaviorSubject<enStep>(0);

  public next = () => {
    const current = this.current.value;
    if (current !== 4) {
      this.current.next(current + 1);
    }
  };

  public prev = () => {
    const current = this.current.value;
    if (current !== 0) {
      this.current.next(current - 1);
    }
  };

  getCurrentStep() {
    return this.current.asObservable();
  }
}

export const stepService = new StepService();
