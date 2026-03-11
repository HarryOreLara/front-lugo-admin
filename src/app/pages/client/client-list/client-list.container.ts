import { Component, OnInit } from '@angular/core';
import { Client } from '@class/index';
import { ClientFacade } from '@patterns//facade/client.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.container.html',
})
export class ClientListContainer implements OnInit {
  clients$ = new BehaviorSubject<Client[]>([]);
  client$ = new BehaviorSubject<Client>(new Client());
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly clientFacade: ClientFacade) {
    this.clients$ = clientFacade.clients$;
    this.client$ = clientFacade.client$;
  }
  ngOnInit(): void {
    this.clientFacade.getAllClients();
  }
}
