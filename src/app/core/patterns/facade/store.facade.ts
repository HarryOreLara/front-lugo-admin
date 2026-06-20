import { Injectable } from '@angular/core';
import { Store } from '@class/index';
import { StoreService } from '@service/store/store.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { createStoreMapper } from 'src/app/commons/modals/store/modal-new-store/mapper/store.mapper';
import { IStoreForm } from 'src/app/commons/modals/store/modal-new-store/model/store-form.model';

@Injectable({
  providedIn: 'root',
})
export class StoreFacade {
  stores$ = new BehaviorSubject<Store[]>([]);
  store$ = new BehaviorSubject<Store>(new Store());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly storeService: StoreService) {}

  getAllEmployees() {
    this.storeService
      .getAllStore()
      .subscribe((stores) => this.stores$.next(stores));
  }

  saveEmployeeFc(employeeForm: IStoreForm) {
    const employeeFacade = createStoreMapper(employeeForm);

    this.loading$.next(true);

    this.storeService
      .createStore(employeeFacade)
      .pipe(
        tap((response) => {
          this.stores$.next([response, ...this.stores$.value]);

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
