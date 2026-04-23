import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersContainer } from './users.container';

const routes: Routes = [
  {
    path: '',
    component: UsersContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
