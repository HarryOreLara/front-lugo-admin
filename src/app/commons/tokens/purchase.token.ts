import { InjectionToken } from '@angular/core';
import { PurchaseRepository } from '@patterns//repository/purchase.repository';

export const PURCHASE_REPOSITORY = new InjectionToken<PurchaseRepository>(
  'PurchaseRepository',
);
