import { InjectionToken } from '@angular/core';
import { CategoryRepository } from '@patterns//repository/category.repository';

export const CATEGORY_REPOSITORY = new InjectionToken<CategoryRepository>(
  'CategoryRepository',
);
