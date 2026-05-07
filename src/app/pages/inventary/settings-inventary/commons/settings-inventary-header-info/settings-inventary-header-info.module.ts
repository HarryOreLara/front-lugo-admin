import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsInventaryHeaderInfoComponent } from './settings-inventary-header-info.component';
import { SettingsInventaryHeaderInfoContainer } from './settings-inventary-header-info.container';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [
    SettingsInventaryHeaderInfoComponent,
    SettingsInventaryHeaderInfoContainer,
  ],
  imports: [CommonModule, SharedPipesModule],
  exports: [SettingsInventaryHeaderInfoContainer],
})
export class SettingsInventaryHeaderInfoModule {}
