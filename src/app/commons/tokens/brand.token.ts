import { InjectionToken } from "@angular/core";
import { BrandRepository } from "@patterns//repository/brand.repository";

export const BRAND_REPOSITORY = new InjectionToken<BrandRepository>(
  'BrandRepository',
);
