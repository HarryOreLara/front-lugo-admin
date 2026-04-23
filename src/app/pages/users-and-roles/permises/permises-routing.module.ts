import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisesComponent } from './permises.component';
import { RouterModule, Routes } from '@angular/router';
import { PermisesContainer } from './permises.container';

const routes: Routes = [
  {
    path: '',
    component: PermisesContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisesRoutingModule {}
