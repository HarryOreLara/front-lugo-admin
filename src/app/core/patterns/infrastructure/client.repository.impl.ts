import { Injectable } from '@angular/core';
import { ClientRepository } from '../repository/client.repository';
import { Client } from '@class/index';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClientRequest } from 'src/app/commons/modals/client/modal-new-client/models/client-request.model';
import { SearchType } from '@enums/search-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ClientRepositoryImpl implements ClientRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  findOneClient(value: string, searchType: SearchType): Observable<Client> {
    const direction = `${this.apiUrl}/customer/findOneCustomer`;

    const customParams = {
      value,
      searchType,
    };

    console.log({ customParams });
    return this.http
      .get<IGeneric<Client>>(direction, { params: customParams })
      .pipe(
        map((response: IGeneric<Client>) => Client.fromJson(response.data)),
      );
  }

  getAllClient(page: number, size: number): Observable<Client[]> {
    const direction = `${this.apiUrl}/customer/getAllCustomer`;

    return this.http
      .get<IGenericArrays<Client[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Client[]>) =>
          response.data.map((product) => Client.fromJson(product)),
        ),
      );
  }

  createClient(client: IClientRequest): Observable<Client> {
    const direction = `${this.apiUrl}/customer/createCustomer`;

    console.log({ client });
    return this.http
      .post<IGeneric<Client>>(direction, client)
      .pipe(
        map((response: IGeneric<Client>) => Client.fromJson(response.data)),
      );
  }
  updateClient(id: number, client: Client): Observable<Client> {
    throw new Error('Method not implemented.');
  }
  deleteClient(id: number): Observable<Client> {
    throw new Error('Method not implemented.');
  }
}
