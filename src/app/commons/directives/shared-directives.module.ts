import { NgModule } from '@angular/core';
import { TagStatusDirective } from './status.directive';
import { CommonModule } from '@angular/common';
import { TagChannelDirective } from './channel.directive';
import { TagInventaryMovementDirective } from './inventary-movement.directive';
import { TagDocumentTypeDirective } from './document-type.directive';

@NgModule({
  declarations: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
    TagDocumentTypeDirective,
  ],
  imports: [CommonModule],
  exports: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
    TagDocumentTypeDirective,
  ],
})
export class SharedDirectiveModule {}
