import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'current-stock',
    loadChildren: () =>
      import('./current-stock/current-stock.module').then(
        (m) => m.CurrentStockModule
      ),
  },
  {
    path: 'input-stock',
    loadChildren: () =>
      import('./input-stock/input-stock.module').then(
        (m) => m.InputStockModule
      ),
  },
  {
    path: 'output-stock',
    loadChildren: () =>
      import('./output-stock/output-stock.module').then(
        (m) => m.OutputStockModule
      ),
  },
  {
    path: 'settings-inventary',
    loadChildren: () =>
      import('./settings-inventary/settings-inventary.module').then(
        (m) => m.SettingsInventaryModule
      ),
  },
  {
    path: 'warehouses',
    loadChildren: () =>
      import('./warehouses/warehouses.module').then((m) => m.WarehousesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventaryRoutingModule {}
