import { InjectionToken } from '@angular/core';
import { OwnerRepository } from '@patterns//repository/owner.repository';

export const OWNER_REPOSITORY = new InjectionToken<OwnerRepository>(
  'OwnerRepository',
);
