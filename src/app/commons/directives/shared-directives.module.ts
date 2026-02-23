import { NgModule } from '@angular/core';
import { TagStatusDirective } from './status.directive';
import { CommonModule } from '@angular/common';
import { TagChannelDirective } from './channel.directive';

@NgModule({
  declarations: [TagStatusDirective, TagChannelDirective],
  imports: [CommonModule],
  exports: [TagStatusDirective, TagChannelDirective],
})
export class SharedDirectiveModule {}
