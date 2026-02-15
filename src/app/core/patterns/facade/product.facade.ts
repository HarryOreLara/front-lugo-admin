import { Injectable } from '@angular/core';
import { Product } from '@class/index';
import { ProductService } from '@service/product/product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  products$ = new BehaviorSubject<Product[]>([]);
  product$ = new BehaviorSubject<Product>(new Product());

  constructor(private readonly productService: ProductService) {}

  getAllProducts() {
    this.productService
      .getAllProducts()
      .subscribe((products) => this.products$.next(products));
  }

  saveProductFc(product: Product) {
    this.productService
      .saveProduct(product)
      .subscribe((product) => this.product$.next(product));
  }

  obtenerProduct(id: number) {
    this.productService
      .findOneProduct(id)
      .subscribe((product) => this.product$.next(product));
  }

  // actualizarProduct(product: Product) {
  //   this.productService
  //     .actualizarProduct(product)
  //     .subscribe((product) => this.product$.next(product));
  // }
}
