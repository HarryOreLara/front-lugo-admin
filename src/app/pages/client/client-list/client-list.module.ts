import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { ClientListContainer } from './client-list.container';
import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientHeaderInfoModule } from "./commons/components/client-header-info/client-header-info.module";
import { ClientTableModule } from "./commons/components/client-table/client-table.module";

@NgModule({
  declarations: [ClientListComponent, ClientListContainer],
  imports: [CommonModule, ClientListRoutingModule, ClientHeaderInfoModule, ClientTableModule],
  exports: [ClientListContainer],
})
export class ClientListModule {}
