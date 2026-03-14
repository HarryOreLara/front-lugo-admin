import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { CartItem } from '../../interfaces/car-tem.interface';
import { EventBussService } from '@states/event-buss/event-buss.service';

@Component({
  selector: 'app-purchase-data-product',
  templateUrl: './purchase-data-product.container.html',
})
export class PurchaseDataProductContainer {
  @Input() public products: Product[];

  public constructor(private readonly eventBussService: EventBussService) {}

  public cartItemEmit(cartItem: CartItem[]) {
    this.eventBussService.emit<CartItem[]>('cart-item-shared', cartItem);
  }
}
