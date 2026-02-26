import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { Channel } from '@enums/channel.enum';
import { ProductFacade } from '@patterns//facade/product.facade';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public products$ = new BehaviorSubject<Product[]>([]);
  public product$ = new BehaviorSubject<Product>(new Product());
  public isLoading$: Subject<boolean> = new Subject<boolean>();

  public constructor(public readonly productFacade: ProductFacade) {
    this.products$ = productFacade.products$;
    this.product$ = productFacade.product$;
  }

  ngOnInit(): void {
    this.productFacade.getAllProducts(Channel.PHYSICAL);
  }
}
