import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInventaryComponent } from './settings-inventary.component';
import { SettingsInventaryRoutingModule } from './settings-inventary-routing.module';
import { FormsModule } from '@angular/forms';
import { SettingsInventaryContainer } from './settings-inventary.container';
import { SettingsInventaryHeaderInfoModule } from "./commons/settings-inventary-header-info/settings-inventary-header-info.module";
import { SettingsInventaryTableModule } from "./commons/settings-inventary-table/settings-inventary-table.module";

@NgModule({
  declarations: [SettingsInventaryComponent, SettingsInventaryContainer],
  imports: [CommonModule, SettingsInventaryRoutingModule, FormsModule, SettingsInventaryHeaderInfoModule, SettingsInventaryTableModule],
})
export class SettingsInventaryModule {}
