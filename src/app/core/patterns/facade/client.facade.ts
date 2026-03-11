import { Injectable } from '@angular/core';
import { Client } from '@class/index';
import { ClientService } from '@service/client/client.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { createClientMapper } from 'src/app/commons/modals/client/modal-new-client/mappers/client.mapper';
import { IClientForm } from 'src/app/commons/modals/client/modal-new-client/models/client-form.model';

@Injectable({
  providedIn: 'root',
})
export class ClientFacade {
  clients$ = new BehaviorSubject<Client[]>([]);
  client$ = new BehaviorSubject<Client>(new Client());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly clientService: ClientService) {}

  getAllClients() {
    this.clientService
      .getAllClient()
      .subscribe((clients) => this.clients$.next(clients));
  }

  saveClient(client: IClientForm) {
    const clientMapper = createClientMapper(client);

    this.loading$.next(true);

    this.clientService
      .saveclient(clientMapper)
      .pipe(
        tap((response) => {
          this.clients$.next([response, ...this.clients$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
