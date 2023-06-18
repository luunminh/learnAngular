import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
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
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

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
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }),
      );
  }

  handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(userId, email, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }),
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _expirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.id, userData.email, userData._token, new Date(userData._expirationDate));
    if (loadedUser.token) {
      const expirationDuration = new Date(userData._expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
