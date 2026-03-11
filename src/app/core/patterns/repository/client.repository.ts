import { Client } from '@class/index';
import { Observable } from 'rxjs';
import { IClientRequest } from 'src/app/commons/modals/client/modal-new-client/models/client-request.model';

export interface ClientRepository {
  getAllClient(page: number, size: number): Observable<Client[]>;
  findClientById(id: number): Observable<Client>;
  findClientByName(client: Client): Observable<Client>;
  createClient(client: IClientRequest): Observable<Client>;
  updateClient(id: number, client: Client): Observable<Client>;
  deleteClient(id: number): Observable<Client>;
}
