import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list.component';
import { OwnerListContainer } from './owner-list.container';

@NgModule({
  declarations: [OwnerListComponent, OwnerListContainer],
  imports: [CommonModule],
  exports: [OwnerListContainer],
})
export class OwnerListModule {}
