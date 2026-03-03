import { NgModule } from '@angular/core';
import { TagStatusDirective } from './status.directive';
import { CommonModule } from '@angular/common';
import { TagChannelDirective } from './channel.directive';
import { TagInventaryMovementDirective } from './inventary-movement.directive';

@NgModule({
  declarations: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
  ],
  imports: [CommonModule],
  exports: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
  ],
})
export class SharedDirectiveModule {}
