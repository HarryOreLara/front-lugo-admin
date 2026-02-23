import { Injectable } from '@angular/core';
import { Product } from '@class/index';
import { Channel } from '@enums/channel.enum';
import { ProductService } from '@service/product/product.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { createProductMapper } from 'src/app/commons/modals/products/modal-new-product/mapper/product.mapper';
import { IProductForm } from 'src/app/commons/modals/products/modal-new-product/modals/product-form.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  products$ = new BehaviorSubject<Product[]>([]);
  product$ = new BehaviorSubject<Product>(new Product());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly productService: ProductService) {}

  getAllProducts(channel: Channel) {
    this.productService
      .getAllProducts(channel)
      .subscribe((products) => this.products$.next(products));
  }

  saveProductFc(product: IProductForm) {
    const productMapper = createProductMapper(product);

    this.productService
      .saveProduct(productMapper)
      .pipe(
        tap((response) => {
          console.log({
            response
          });

          console.log({
            estado: this.products$.value
          });
          this.products$.next([response, ...this.products$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
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
