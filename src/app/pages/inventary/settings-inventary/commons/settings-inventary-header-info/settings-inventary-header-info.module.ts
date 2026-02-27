import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInventaryHeaderInfoComponent } from './settings-inventary-header-info.component';
import { SettingsInventaryHeaderInfoContainer } from './settings-inventary-header-info.container';

@NgModule({
  declarations: [
    SettingsInventaryHeaderInfoComponent,
    SettingsInventaryHeaderInfoContainer,
  ],
  imports: [CommonModule],
  exports: [SettingsInventaryHeaderInfoContainer],
})
export class SettingsInventaryHeaderInfoModule {}
