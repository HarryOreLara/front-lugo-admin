import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { Channel } from '@enums/channel.enum';
import { InventaryMovementFacade } from '@patterns//facade/inventary-movement.facade';
import { ProductFacade } from '@patterns//facade/product.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings-inventary',
  templateUrl: './settings-inventary.container.html',
})
export class SettingsInventaryContainer implements OnInit {
  inventaryMovements$ = new BehaviorSubject<InventaryMovement[]>([]);
  products$ = new BehaviorSubject<Product[]>([]);

  public constructor(
    private readonly inventaryMovementFacade: InventaryMovementFacade,
    private readonly productFacade: ProductFacade,
  ) {
    this.inventaryMovements$ = inventaryMovementFacade.inventaryMovements$;
    this.products$ = productFacade.products$;
  }

  ngOnInit(): void {
    this.inventaryMovementFacade.getAllInvetaryMovements();
    this.productFacade.getAllProducts(Channel.PHYSICAL);
  }
}
