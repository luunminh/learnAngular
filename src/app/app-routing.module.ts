import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  {
    path: 'task-management',
    loadChildren: () =>
      //lazy-loading routing
      import('./task-management/task-management.module').then(m => m.TaskManagementModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //pre load lazy loading in case it large module and
      // waste a lot of time to load
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
