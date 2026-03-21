import { Provider } from '@angular/core';
import { PurchaseRepositoryImpl } from '@patterns//infrastructure/purchase.repository.impl';
import { PURCHASE_REPOSITORY } from 'src/app/commons/tokens/purchase.token';

export const PURCHASE_PROVIDER: Array<Provider> = [
  {
    provide: PURCHASE_REPOSITORY,
    useClass: PurchaseRepositoryImpl,
  },
];
