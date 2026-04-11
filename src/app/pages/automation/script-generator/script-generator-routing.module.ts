import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptGeneratorContainer } from './script-generator.container';
const routes: Routes = [{ path: '', component: ScriptGeneratorContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScriptGeneratorRoutingModule {}
