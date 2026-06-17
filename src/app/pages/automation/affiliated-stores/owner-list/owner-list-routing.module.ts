import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListContainer } from './owner-list.container';

const routes: Routes = [
  {
    path: '',
    component: OwnerListContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerListRoutingModule {}
