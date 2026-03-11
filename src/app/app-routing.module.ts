import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '@components//layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule,
          ),
      },
      {
        path: 'inventary',
        loadChildren: () =>
          import('./pages/inventary/inventary.module').then(
            (m) => m.InventaryModule,
          ),
      },
      {
        path: 'purchases',
        loadChildren: () =>
          import('./pages/purchase/purchase.module').then(
            (m) => m.PurchaseModule,
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./pages/client/client.module').then(
            (m) => m.ClientModule,
          ),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
