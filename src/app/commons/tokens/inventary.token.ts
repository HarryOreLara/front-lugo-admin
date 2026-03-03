import { InjectionToken } from '@angular/core';
import { InventaryMovementRepository } from '@patterns//repository/inventary-movement.repository';

export const INVENTARY_MOVEMENT_REPOSITORY =
  new InjectionToken<InventaryMovementRepository>(
    'InventaryMovementRepository',
  );
