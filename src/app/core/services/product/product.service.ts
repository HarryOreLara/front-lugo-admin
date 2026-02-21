import { Injectable, Inject } from '@angular/core';
import { Product } from '@class/index';
import { ProductRepository } from '@patterns//repository/product.repository';
import { Observable } from 'rxjs';
import { IProductRquest } from 'src/app/commons/modals/products/modal-new-product/modals/product-request.modal';
import { PRODUCT_REPOSITORY } from 'src/app/commons/tokens/product.token';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.productRepository.getAllProduct(1, 10);
  }

  findOneProduct(id: number): Observable<Product> {
    return this.productRepository.findProductById(id);
  }

  saveProduct(product: IProductRquest): Observable<Product> {
    return this.productRepository.createProduct(product);
  }

  actualizarProduct(id: number, product: Product): Observable<Product> {
    return this.productRepository.updateProduct(id, product);
  }

  eliminarProduct(id: number): Observable<Product> {
    return this.productRepository.deleteProduct(id);
  }
}
