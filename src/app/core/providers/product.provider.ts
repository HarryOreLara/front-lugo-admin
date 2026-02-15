import { Provider } from '@angular/core';
import { ProductRepositoryImpl } from '@patterns//infrastructure/product.repository.impl';
import { PRODUCT_REPOSITORY } from 'src/app/commons/tokens/product.token';

export const PRODUCT_PROVIDER: Array<Provider> = [
  {
    provide: PRODUCT_REPOSITORY,
    useClass: ProductRepositoryImpl,
  },
];
