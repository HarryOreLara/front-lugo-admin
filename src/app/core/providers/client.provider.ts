import { Provider } from '@angular/core';
import { ClientRepositoryImpl } from '@patterns//infrastructure/client.repository.impl';
import { CLIENT_REPOSITORY } from 'src/app/commons/tokens/client.token';

export const CLIENT_PROVIDER: Array<Provider> = [
  {
    provide: CLIENT_REPOSITORY,
    useClass: ClientRepositoryImpl,
  },
];
