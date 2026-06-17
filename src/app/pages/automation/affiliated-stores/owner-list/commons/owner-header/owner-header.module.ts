import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerHeaderComponent } from './owner-header.component';
import { OwnerHeaderContainer } from './owner-header.container';

@NgModule({
  declarations: [OwnerHeaderComponent, OwnerHeaderContainer],
  imports: [CommonModule],
  exports: [OwnerHeaderContainer],
})
export class OwnerHeaderModule {}
