import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./roles/roles.module').then((m) => m.RolesModule),
  },
  {
    path: 'permises',
    loadChildren: () =>
      import('./permises/permises.module').then((m) => m.PermisesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersAndRolesRoutingModule {}
