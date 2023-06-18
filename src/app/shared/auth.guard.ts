import { SnackbarService } from './snackbar.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService, private snackbarService: SnackbarService) {}

  canActivate: CanActivateFn = (route, state) => {
    return this.authService.user.pipe(
      map(user => {
        if (user === null) {
          this.snackbarService.onOpenSnackBar('Please login to view tasks', 'Close', 1000);
        }
        return !!user;
      }),
    );
  };
}
