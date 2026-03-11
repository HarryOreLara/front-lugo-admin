import { Inject, Injectable } from '@angular/core';
import { Client } from '@class/index';
import { ClientRepository } from '@patterns//repository/client.repository';
import { Observable } from 'rxjs';
import { CLIENT_REPOSITORY } from 'src/app/commons/tokens/client.token';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: ClientRepository,
  ) {}

  public getAllClient(): Observable<Client[]> {
    return this.clientRepository.getAllClient(10, 20);
  }

  public findOneclient(id: number): Observable<Client> {
    return this.clientRepository.findClientById(id);
  }

  public saveclient(client: Client): Observable<Client> {
    return this.clientRepository.createClient(client);
  }
}
