import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobantsContainer } from './comprobants.container';

const routes: Routes = [
  {
    path: '',
    component: ComprobantsContainer,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobantsRoutingModule {}
