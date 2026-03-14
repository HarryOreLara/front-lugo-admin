import { Component, OnInit } from '@angular/core';
import { EventBussService } from '@states/event-buss/event-buss.service';
import { CartItem } from '../../interfaces/car-tem.interface';

@Component({
  selector: 'app-purchase-summary-sale',
  templateUrl: './purchase-summary-sale.container.html',
})
export class PurchaseSummarySaleContainer implements OnInit {
  public cartItems: CartItem[] = [];

  public constructor(private readonly eventBussService: EventBussService) {}

  ngOnInit(): void {
    this.eventBussService.on<CartItem[]>('cart-item-shared').subscribe({
      next: (cartItems: CartItem[]) => {
        console.log({cartItems});
        this.cartItems = cartItems;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
