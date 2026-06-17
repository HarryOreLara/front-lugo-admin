import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'script-generator',
    loadChildren: () =>
      import('./script-generator/script-generator.module').then(
        (m) => m.ScriptGeneratorModule,
      ),
  },
  {
    path: 'affiliated-stores',
    loadChildren: () =>
      import('./affiliated-stores/affiliated-stores.module').then(
        (m) => m.AffiliatedStoresModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomationRoutingModule {}
