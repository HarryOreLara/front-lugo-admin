import { Inject, Injectable } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { OwnerRepository } from '@patterns//repository/owner.repository';
import { Observable } from 'rxjs';
import { IOwnerRequest } from 'src/app/commons/modals/store/modal-new-owner/model/owner-request.model';
import { OWNER_REPOSITORY } from 'src/app/commons/tokens/owner.token';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(
    @Inject(OWNER_REPOSITORY)
    private readonly ownerRepository: OwnerRepository,
  ) {}

  getAllOwner(): Observable<Owner[]> {
    return this.ownerRepository.getAllOwner(1, 10);
  }

  findOwnerById(id: number): Observable<Owner> {
    return this.ownerRepository.findOwnerById(id);
  }

  createOwner(product: IOwnerRequest): Observable<Owner> {
    return this.ownerRepository.createOwner(product);
  }
}
