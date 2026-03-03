import { Provider } from '@angular/core';
import { PRODUCT_PROVIDER } from './product.provider';
import { CATEGORY_PROVIDER } from './category.provider';
import { INVENTARY_PROVIDER } from './inventary.provider';

export const APP_PROVIDERS: Array<Provider> = [
  ...PRODUCT_PROVIDER,
  ...CATEGORY_PROVIDER,
  ...INVENTARY_PROVIDER
];
