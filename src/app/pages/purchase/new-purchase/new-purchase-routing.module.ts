import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPurchaseContainer } from './new-purchase.container';

const routes: Routes = [
  {
    path: '',
    component: NewPurchaseContainer,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPurchaseRoutingModule {}
