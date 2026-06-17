import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'store-list',
    loadChildren: () =>
      import('./store-list/store-list.module').then((m) => m.StoreListModule),
  },
  {
    path: 'owner-list',
    loadChildren: () =>
      import('./owner-list/owner-list.module').then((m) => m.OwnerListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffiliatedStoresRoutingModule {}
