import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

// const routes: Routes = [{ path: '' },{path:"profile"},{path:"problem/:id"}];
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login-container/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./profile-container/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
