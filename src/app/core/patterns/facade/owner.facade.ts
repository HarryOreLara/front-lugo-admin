import { Injectable } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { OwnerService } from '@service/owner/owner.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { createOwnerMapper } from 'src/app/commons/modals/store/modal-new-owner/mapper/owner.mapper';
import { IOwnerForm } from 'src/app/commons/modals/store/modal-new-owner/model/owner-form.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerFacade {
  owners$ = new BehaviorSubject<Owner[]>([]);
  owner$ = new BehaviorSubject<Owner>(new Owner());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly ownerService: OwnerService) {}

  getAllOwners() {
    this.ownerService
      .getAllOwner()
      .subscribe((owners) => this.owners$.next(owners));
  }

  saveOwnerFc(employeeForm: IOwnerForm) {
    const employeeFacade = createOwnerMapper(employeeForm);

    this.loading$.next(true);

    this.ownerService
      .createOwner(employeeFacade)
      .pipe(
        tap((response) => {
          this.owners$.next([response, ...this.owners$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
