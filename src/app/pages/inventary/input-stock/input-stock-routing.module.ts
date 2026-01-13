import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputStockComponent } from './input-stock.component';


const routes: Routes = [
  {
    path: '',
    component: InputStockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputStockRoutingModule {}
