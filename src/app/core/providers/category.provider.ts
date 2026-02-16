import { Provider } from '@angular/core';
import { CategoryRepositoryImpl } from '@patterns//infrastructure/category.repository.impl';
import { CATEGORY_REPOSITORY } from 'src/app/commons/tokens/category.token';

export const CATEGORY_PROVIDER: Array<Provider> = [
  {
    provide: CATEGORY_REPOSITORY,
    useClass: CategoryRepositoryImpl,
  },
];
