import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { ProductFacade } from '@patterns//facade/product.facade';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.container.html',
})
export class ProductTableContainer implements OnInit {
  // public products: Array<Product> = [];
  public products$ = new BehaviorSubject<Product[]>([]);
  public isLoading$: Subject<boolean> = new Subject<boolean>();

  public constructor(public readonly productFacade: ProductFacade) {
    this.products$ = productFacade.products$;
  }

  ngOnInit(): void {
    this.productFacade.getAllProducts();

    this.products$.subscribe((res) => {});
  }
}
