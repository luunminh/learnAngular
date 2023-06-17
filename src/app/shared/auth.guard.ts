import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService) {}

  canActivate: CanActivateFn = (route, state) => {
    return this.authService.curUser.pipe(map(user => !!user));
  };
}
