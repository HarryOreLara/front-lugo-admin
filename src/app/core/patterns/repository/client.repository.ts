import { Client } from '@class/index';
import { Observable } from 'rxjs';

export interface ClientRepository {
  getAllClient(page: number, size: number): Observable<Client[]>;
  findClientById(id: number): Observable<Client>;
  findClientByName(client: Client): Observable<Client>;
  createClient(client: Client): Observable<Client>;
  updateClient(id: number, client: Client): Observable<Client>;
  deleteClient(id: number): Observable<Client>;
}
