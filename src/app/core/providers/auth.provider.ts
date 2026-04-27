import { Provider } from "@angular/core";
import { AuthRepositoryImpl } from "@patterns//infrastructure/auth.repository.impl";
import { AUTH_REPOSITORY } from "src/app/commons/tokens/auth.token";

export const AUTH_PROVIDER: Array<Provider> = [
  {
    provide: AUTH_REPOSITORY,
    useClass: AuthRepositoryImpl,
  },
];
