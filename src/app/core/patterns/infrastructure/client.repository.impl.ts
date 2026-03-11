import { Injectable } from '@angular/core';
import { ClientRepository } from '../repository/client.repository';
import { Client } from '@class/index';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { IGenericArrays } from '@interfaces/genericas/IGeneric.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientRepositoryImpl implements ClientRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

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
  findClientById(id: number): Observable<Client> {
    throw new Error('Method not implemented.');
  }
  findClientByName(client: Client): Observable<Client> {
    throw new Error('Method not implemented.');
  }
  createClient(client: Client): Observable<Client> {
    throw new Error('Method not implemented.');
  }
  updateClient(id: number, client: Client): Observable<Client> {
    throw new Error('Method not implemented.');
  }
  deleteClient(id: number): Observable<Client> {
    throw new Error('Method not implemented.');
  }
}
