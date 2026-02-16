import { NgModule } from '@angular/core';
import { TagStatusDirective } from './status.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TagStatusDirective],
  imports: [CommonModule],
  exports: [TagStatusDirective],
})
export class SharedDirectiveModule {}
