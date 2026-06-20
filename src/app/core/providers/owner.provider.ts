import { Provider } from '@angular/core';
import { OwnerRepositoryImpl } from '@patterns//infrastructure/owner.repository.impl';
import { OWNER_REPOSITORY } from 'src/app/commons/tokens/owner.token';

export const OWNER_PROVIDER: Array<Provider> = [
  {
    provide: OWNER_REPOSITORY,
    useClass: OwnerRepositoryImpl,
  },
];
