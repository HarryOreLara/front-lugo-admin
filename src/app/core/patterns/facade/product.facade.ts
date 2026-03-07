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

    this.loading$.next(true);

    this.productService
      .saveProduct(productMapper)
      .pipe(
        tap((response) => {
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
  findOneProduct(id: number) {
    return this.productService.findOneProduct(id);
  }

  updateProductFc(product: IProductForm, id: number) {
    const productMapper = createProductMapper(product);

    this.loading$.next(true);

    this.productService
      .updateProduct(id, productMapper)
      .pipe(
        tap((updateProduct) => {
          const updatedList = this.products$.value.map((product) =>
            product.id === id ? { ...product, ...updateProduct } : product,
          );

          this.products$.next(updatedList);

          this.closeModal$.next();
        }),

        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
