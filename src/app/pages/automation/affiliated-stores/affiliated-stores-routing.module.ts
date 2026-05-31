import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatedStoresContainer } from './affiliated-stores.container';

const routes: Routes = [{ path: '', component: AffiliatedStoresContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffiliatedStoresRoutingModule {}
