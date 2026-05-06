import { NgModule } from '@angular/core';
import { TagStatusDirective } from './status.directive';
import { CommonModule } from '@angular/common';
import { TagChannelDirective } from './channel.directive';
import { TagInventaryMovementDirective } from './inventary-movement.directive';
import { TagDocumentTypeDirective } from './document-type.directive';
import { ReactiveFormDirective } from './reactive-form.directive';
import { ErrorBorderDirective } from './border-error-form.directive';

@NgModule({
  declarations: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
    TagDocumentTypeDirective,
    ReactiveFormDirective,
    ErrorBorderDirective,
  ],
  imports: [CommonModule],
  exports: [
    TagStatusDirective,
    TagChannelDirective,
    TagInventaryMovementDirective,
    TagDocumentTypeDirective,
    ReactiveFormDirective,
    ErrorBorderDirective,
  ],
})
export class SharedDirectiveModule {}
