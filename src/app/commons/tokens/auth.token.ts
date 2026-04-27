import { InjectionToken } from "@angular/core";
import { AuthRepository } from "@patterns//repository/auth.repository";

export const AUTH_REPOSITORY = new InjectionToken<AuthRepository>(
  'AuthRepository',
);
