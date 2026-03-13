import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { Channel } from '@enums/channel.enum';
import { ProductFacade } from '@patterns//facade/product.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.container.html',
})
export class NewPurchaseContainer implements OnInit {
  public products$ = new BehaviorSubject<Product[]>([]);

  public constructor(private readonly productFacade: ProductFacade) {
    this.products$ = productFacade.products$;
  }

  public ngOnInit(): void {
    this.productFacade.getAllProducts(Channel.PHYSICAL);
  }
}
