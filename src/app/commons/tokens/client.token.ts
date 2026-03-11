import { InjectionToken } from "@angular/core";
import { ClientRepository } from "@patterns//repository/client.repository";

export const CLIENT_REPOSITORY = new InjectionToken<ClientRepository>(
  'ClientRepository',
);
