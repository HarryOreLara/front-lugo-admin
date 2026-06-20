import { Provider } from '@angular/core';
import { StoreRepositoryImpl } from '@patterns//infrastructure/store.repository.impl';
import { STORE_REPOSITORY } from 'src/app/commons/tokens/store.token';

export const STORE_PROVIDER: Array<Provider> = [
  {
    provide: STORE_REPOSITORY,
    useClass: StoreRepositoryImpl,
  },
];
