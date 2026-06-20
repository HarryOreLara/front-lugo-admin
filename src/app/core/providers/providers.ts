import { Provider } from '@angular/core';
import { PRODUCT_PROVIDER } from './product.provider';
import { CATEGORY_PROVIDER } from './category.provider';
import { INVENTARY_PROVIDER } from './inventary.provider';
import { CLIENT_PROVIDER } from './client.provider';
import { PURCHASE_PROVIDER } from './purchase.provider';
import { EMPLOYEE_PROVIDER } from './employee.provider';
import { AUTH_PROVIDER } from './auth.provider';
import { BRAND_PROVIDER } from './brand.provider';
import { OWNER_PROVIDER } from './owner.provider';
import { STORE_PROVIDER } from './store.provider';

export const APP_PROVIDERS: Array<Provider> = [
  ...PRODUCT_PROVIDER,
  ...CATEGORY_PROVIDER,
  ...INVENTARY_PROVIDER,
  ...CLIENT_PROVIDER,
  ...PURCHASE_PROVIDER,
  ...EMPLOYEE_PROVIDER,
  ...AUTH_PROVIDER,
  ...BRAND_PROVIDER,
  ...OWNER_PROVIDER,
  ...STORE_PROVIDER,
];
