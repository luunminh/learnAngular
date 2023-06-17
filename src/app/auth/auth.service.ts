import { User } from '../shared/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User = null;
  userChanged = new BehaviorSubject<User>({ ...this.user });

  get curUser(): Observable<any> {
    if (this.user) {
      return of({ ...this.user });
    } else return of(null);
  }

  setUser(newUser: User) {
    this.user = newUser;
    this.userChanged.next({ ...this.user });
  }
}
