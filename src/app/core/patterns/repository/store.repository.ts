import { Store } from '@class/index';
import { Observable } from 'rxjs';
import { IStoreRequest } from 'src/app/commons/modals/store/modal-new-store/model/store-request.model';

export interface StoreRepository {
  getAllStore(page: number, size: number): Observable<Store[]>;
  findStoreById(id: number): Observable<Store>;
  createStore(Store: IStoreRequest): Observable<Store>;
}
