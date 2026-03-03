import { Injectable } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { InventaryMovementService } from '@service/inventary/inventary-movement.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventaryMovementFacade {
  inventaryMovements$ = new BehaviorSubject<InventaryMovement[]>([]);
  inventaryMovement$ = new BehaviorSubject<InventaryMovement>(
    new InventaryMovement(),
  );
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(
    private readonly inventaryMovementService: InventaryMovementService,
  ) {}

  getAllInvetaryMovements() {
    this.inventaryMovementService
      .getAllInventaryMovements()
      .pipe(takeUntil(this.destroy$))
      .subscribe((inventaries) => {
        console.log({
          inventaries
        });
        this.inventaryMovements$.next(inventaries)});
  }
}
