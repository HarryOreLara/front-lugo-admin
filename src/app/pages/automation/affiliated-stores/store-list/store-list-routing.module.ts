import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListContainer } from './store-list.container';

const routes: Routes = [{ path: '', component: StoreListContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreListRoutingModule {}
