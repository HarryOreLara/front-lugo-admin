import { Client } from '@class/index';
import { DocumentType } from '@enums/document-type.enum';
import { SearchType } from '@enums/search-type.enum';
import { Observable } from 'rxjs';
import { IClientRequest } from 'src/app/commons/modals/client/modal-new-client/models/client-request.model';

export interface ClientRepository {
  getAllClient(page: number, size: number): Observable<Client[]>;
  findOneClient(value: string, searchType: SearchType): Observable<Client>;
  createClient(client: IClientRequest): Observable<Client>;
  updateClient(id: number, client: Client): Observable<Client>;
  deleteClient(id: number): Observable<Client>;
}
