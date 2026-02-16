import { Provider } from '@angular/core';
import { PRODUCT_PROVIDER } from './product.provider';
import { CATEGORY_PROVIDER } from './category.provider';

export const APP_PROVIDERS: Array<Provider> = [
  ...PRODUCT_PROVIDER,
  ...CATEGORY_PROVIDER,
];
