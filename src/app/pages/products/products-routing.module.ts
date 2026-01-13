import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-products',
    loadChildren: () =>
      import('./list-products/list-products.module').then(
        (m) => m.ListProductsModule
      ),
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./brand/brand.module').then((m) => m.BrandModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
