import { Component, OnInit } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { InventaryMovementFacade } from '@patterns//facade/inventary-movement.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings-inventary',
  templateUrl: './settings-inventary.container.html',
})
export class SettingsInventaryContainer implements OnInit {
  inventaryMovements$ = new BehaviorSubject<InventaryMovement[]>([]);

  public constructor(
    private readonly inventaryMovementFacade: InventaryMovementFacade,
  ) {
    this.inventaryMovements$ = inventaryMovementFacade.inventaryMovements$;
  }

  ngOnInit(): void {
    this.inventaryMovementFacade.getAllInvetaryMovements();
  }
}
