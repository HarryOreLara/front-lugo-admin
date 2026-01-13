import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsInventaryComponent } from './settings-inventary.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsInventaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsInventaryRoutingModule {}
