import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseListContainer } from './purchase-list.container';

const routes: Routes = [
  {
    path: '',
    component: PurchaseListContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseListRoutingModule {}
