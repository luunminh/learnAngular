import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User = null;
  userChanged = new BehaviorSubject<User>({ ...this.user });

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDh1UsMlkKHfg_lTXCGsWculwkN5UlyvKA',
        {
          email,
          password,
          returnSecureToken: true,
        },
      )
      .pipe(
        catchError(err => {
          let errMsg = 'An unknown error occurred!';
          if (!err.error || !err.error.error) {
            return throwError(errMsg);
          }
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              errMsg = 'This email exists already!!!';
          }
          return throwError(errMsg);
        }),
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDh1UsMlkKHfg_lTXCGsWculwkN5UlyvKA',
        {
          email,
          password,
          returnSecureToken: true,
        },
      )
      .pipe(
        catchError(err => {
          console.log(err);

          let errMsg = 'An unknown error occurred!';
          if (!err.error || !err.error.error) {
            return throwError(errMsg);
          }
          switch (err.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errMsg = 'This email or password is not correct!!';
              break;
            case 'INVALID_PASSWORD':
              errMsg = 'This email or password is not correct!!';
              break;
          }
          return throwError(errMsg);
        }),
      );
  }

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
