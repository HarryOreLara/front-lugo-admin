import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list.component';
import { StoreListContainer } from './store-list.container';
import { StoreListRoutingModule } from './store-list-routing.module';
import { StoreListTableModule } from './commons/store-list-table/store-list-table.module';
import { StoreListHeaderModule } from "./commons/store-list-header/store-list-header.module";

@NgModule({
  declarations: [StoreListComponent, StoreListContainer],
  imports: [CommonModule, StoreListRoutingModule, StoreListTableModule, StoreListHeaderModule],
  exports: [StoreListContainer],
})
export class StoreListModule {}
