import { Inject, Injectable } from '@angular/core';
import { Store } from '@class/index';
import { StoreRepository } from '@patterns//repository/store.repository';
import { Observable } from 'rxjs';
import { IStoreRequest } from 'src/app/commons/modals/store/modal-new-store/model/store-request.model';
import { STORE_REPOSITORY } from 'src/app/commons/tokens/store.token';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(
    @Inject(STORE_REPOSITORY)
    private readonly storeRepository: StoreRepository,
  ) {}

  getAllStore(): Observable<Store[]> {
    return this.storeRepository.getAllStore(1, 10);
  }

  findStoreById(id: number): Observable<Store> {
    return this.storeRepository.findStoreById(id);
  }

  createStore(store: IStoreRequest): Observable<Store> {
    return this.storeRepository.createStore(store);
  }
}
