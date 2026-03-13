import { Inject, Injectable } from '@angular/core';
import { Client } from '@class/index';
import { SearchType } from '@enums/search-type.enum';
import { ClientRepository } from '@patterns//repository/client.repository';
import { Observable } from 'rxjs';
import { IClientRequest } from 'src/app/commons/modals/client/modal-new-client/models/client-request.model';
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

  public findOneclient(
    document: string,
    searchType: SearchType,
  ): Observable<Client> {
    return this.clientRepository.findOneClient(document, searchType);
  }

  public saveclient(client: IClientRequest): Observable<Client> {
    return this.clientRepository.createClient(client);
  }
}
