import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListContainer } from './client-list.container';

const routes: Routes = [
  {
    path: '',
    component: ClientListContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientListRoutingModule {}
