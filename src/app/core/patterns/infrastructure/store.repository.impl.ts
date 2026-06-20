import { Injectable } from '@angular/core';
import { StoreRepository } from '../repository/store.repository';
import { Store } from '@class/index';
import { Observable } from 'rxjs';
import { IStoreRequest } from 'src/app/commons/modals/store/modal-new-store/model/store-request.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreRepositoryImpl implements StoreRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}
  getAllStore(page: number, size: number): Observable<Store[]> {
    throw new Error('Method not implemented.');
  }
  findStoreById(id: number): Observable<Store> {
    throw new Error('Method not implemented.');
  }
  createStore(Store: IStoreRequest): Observable<Store> {
    throw new Error('Method not implemented.');
  }
}
