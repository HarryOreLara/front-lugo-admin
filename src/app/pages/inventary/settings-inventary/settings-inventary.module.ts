import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInventaryComponent } from './settings-inventary.component';
import { SettingsInventaryRoutingModule } from './settings-inventary-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsInventaryComponent],
  imports: [CommonModule, SettingsInventaryRoutingModule, FormsModule],
})
export class SettingsInventaryModule {}
