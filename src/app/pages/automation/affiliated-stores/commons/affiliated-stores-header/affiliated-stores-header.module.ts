import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatedStoresHeaderComponent } from './affiliated-stores-header.component';
import { AffiliatedStoresHeaderContainer } from './affiliated-stores-header.container';

@NgModule({
  declarations: [
    AffiliatedStoresHeaderComponent,
    AffiliatedStoresHeaderContainer,
  ],
  imports: [CommonModule],
  exports: [AffiliatedStoresHeaderContainer],
})
export class AffiliatedStoresHeaderModule {}
