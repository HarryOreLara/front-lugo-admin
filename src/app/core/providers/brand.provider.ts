import { Provider } from '@angular/core';
import { BrandRepositoryImpl } from '@patterns//infrastructure/brand.repository.impl';
import { BRAND_REPOSITORY } from 'src/app/commons/tokens/brand.token';

export const BRAND_PROVIDER: Array<Provider> = [
  {
    provide: BRAND_REPOSITORY,
    useClass: BrandRepositoryImpl,
  },
];
