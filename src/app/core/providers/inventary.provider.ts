import { Provider } from '@angular/core';
import { InventaryMovementRepositoryImpl } from '@patterns//infrastructure/inventary-movement.repository.impl';
import { INVENTARY_MOVEMENT_REPOSITORY } from 'src/app/commons/tokens/inventary.token';

export const INVENTARY_PROVIDER: Array<Provider> = [
  {
    provide: INVENTARY_MOVEMENT_REPOSITORY,
    useClass: InventaryMovementRepositoryImpl,
  },
];
