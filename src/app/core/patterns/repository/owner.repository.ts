import { Owner } from '@class/owner/owner.class';
import { Observable } from 'rxjs';
import { IOwnerRequest } from 'src/app/commons/modals/store/modal-new-owner/model/owner-request.model';

export interface OwnerRepository {
  getAllOwner(page: number, size: number): Observable<Owner[]>;
  findOwnerById(id: number): Observable<Owner>;
  createOwner(Owner: IOwnerRequest): Observable<Owner>;
}
