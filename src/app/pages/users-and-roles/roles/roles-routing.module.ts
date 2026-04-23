import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesContainer } from './roles.container';

const routes: Routes = [
  {
    path: '',
    component: RolesContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
