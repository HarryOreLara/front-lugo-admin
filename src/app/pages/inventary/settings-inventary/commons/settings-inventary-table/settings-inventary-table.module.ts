import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInventaryTableComponent } from './settings-inventary-table.component';
import { SettingsInventaryTableContainer } from './settings-inventary-table.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '@pipes/shared.pipes.module';
import { InventaryPrimengModule } from '@themes/inventary/inventary.primeng.module';

@NgModule({
  declarations: [
    SettingsInventaryTableComponent,
    SettingsInventaryTableContainer,
  ],
  imports: [
    CommonModule,
    InventaryPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
  ],
  exports: [SettingsInventaryTableContainer],
})
export class SettingsInventaryTableModule {}
