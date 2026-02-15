import { InjectionToken } from '@angular/core';
import { ProductRepository } from 'src/app/core/patterns/repository/product.repository';

export const PRODUCT_REPOSITORY = new InjectionToken<ProductRepository>(
  'ProductRepository',
);
