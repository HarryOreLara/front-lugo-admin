import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputStockComponent } from './output-stock.component';

const routes: Routes = [
  {
    path: '',
    component: OutputStockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutputStockRoutingModule {}
