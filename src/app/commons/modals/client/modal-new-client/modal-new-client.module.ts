import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewClientComponent } from './modal-new-client.component';
import { ModalNewClientContainer } from './modal-new-client.container';
import { ClientPrimengModule } from '@themes/client/client.primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalNewClientComponent, ModalNewClientContainer],
  imports: [CommonModule, ClientPrimengModule, ReactiveFormsModule],
  exports: [ModalNewClientContainer],
})
export class ModalNewClientModule {}
