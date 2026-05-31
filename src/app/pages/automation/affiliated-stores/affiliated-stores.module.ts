import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatedStoresComponent } from './affiliated-stores.component';
import { AffiliatedStoresContainer } from './affiliated-stores.container';
import { AffiliatedStoresTableModule } from './commons/affiliated-stores-table/affiliated-stores-table.module';
import { AffiliatedStoresHeaderModule } from './commons/affiliated-stores-header/affiliated-stores-header.module';
import { AffiliatedStoresRoutingModule } from './affiliated-stores-routing.module';

@NgModule({
  declarations: [AffiliatedStoresComponent, AffiliatedStoresContainer],
  imports: [
    CommonModule,
    AffiliatedStoresTableModule,
    AffiliatedStoresHeaderModule,
    AffiliatedStoresRoutingModule,
  ],
  exports: [AffiliatedStoresContainer],
})
export class AffiliatedStoresModule {}
