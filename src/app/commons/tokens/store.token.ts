import { InjectionToken } from "@angular/core";
import { StoreRepository } from "@patterns//repository/store.repository";



export const STORE_REPOSITORY = new InjectionToken<StoreRepository>(
  'StoreRepository',
);
