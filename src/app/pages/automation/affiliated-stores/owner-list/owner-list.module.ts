import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list.component';
import { OwnerListContainer } from './owner-list.container';
import { OwnerTableModule } from './commons/owner-table/owner-table.module';
import { OwnerHeaderModule } from './commons/owner-header/owner-header.module';
import { OwnerListRoutingModule } from './owner-list-routing.module';

@NgModule({
  declarations: [OwnerListComponent, OwnerListContainer],
  imports: [
    CommonModule,
    OwnerListRoutingModule,
    OwnerTableModule,
    OwnerHeaderModule,
  ],
  exports: [OwnerListContainer],
})
export class OwnerListModule {}
