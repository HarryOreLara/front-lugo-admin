import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListHeaderContainer } from './store-list-header.container';
import { StoreListHeaderComponent } from './store-list-header.component';

@NgModule({
  declarations: [StoreListHeaderContainer, StoreListHeaderComponent],
  imports: [CommonModule],
  exports: [StoreListHeaderContainer],
})
export class StoreListHeaderModule {}
