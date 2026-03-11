import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHeaderInfoComponent } from './client-header-info.component';
import { ClientHeaderInfoContainer } from './client-header-info.container';
import { ClientPrimengModule } from '@themes/client/client.primeng.module';

@NgModule({
  declarations: [ClientHeaderInfoComponent, ClientHeaderInfoContainer],
  imports: [CommonModule, ClientPrimengModule],
  exports: [ClientHeaderInfoContainer],
})
export class ClientHeaderInfoModule {}
