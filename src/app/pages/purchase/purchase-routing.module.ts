import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-purchase',
    loadChildren: () =>
      import('./new-purchase/new-purchase.module').then(
        (m) => m.NewPurchaseModule,
      ),
  },
  {
    path: 'purchase-list',
    loadChildren: () =>
      import('./purchase-list/purchase-list.module').then(
        (m) => m.PurchaseListModule,
      ),
  },
  {
    path: 'methods-payment',
    loadChildren: () =>
      import('./methods-payment/methods-payment.module').then(
        (m) => m.MethodsPaymentModule,
      ),
  },
  {
    path: 'comprobants',
    loadChildren: () =>
      import('./comprobants/comprobants.module').then(
        (m) => m.ComprobantsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
