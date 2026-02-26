import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsInventaryContainer } from './settings-inventary.container';

const routes: Routes = [
  {
    path: '',
    component: SettingsInventaryContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsInventaryRoutingModule {}
