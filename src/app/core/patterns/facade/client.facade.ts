import { Injectable } from '@angular/core';
import { Client } from '@class/index';
import { ClientService } from '@service/client/client.service';
import { BehaviorSubject, Subject } from 'rxjs';

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
}
