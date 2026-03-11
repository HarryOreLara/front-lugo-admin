import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientTableComponent } from './client-table.component';
import { ClientTableContainer } from './client-table.container';
import { ClientPrimengModule } from '@themes/client/client.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [ClientTableComponent, ClientTableContainer],
  imports: [
    CommonModule,
    ClientPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [ClientTableContainer],
})
export class ClientTableModule {}
