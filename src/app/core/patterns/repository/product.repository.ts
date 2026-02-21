import { Product } from '@class/index';
import { Observable } from 'rxjs';
import { IProductRquest } from 'src/app/commons/modals/products/modal-new-product/modals/product-request.modal';

export interface ProductRepository {
  getAllProduct(page: number, size: number): Observable<Product[]>;
  findProductById(id: number): Observable<Product>;
  createProduct(product: IProductRquest): Observable<Product>;
  updateProduct(id: number, product: Product): Observable<Product>;
  deleteProduct(id: number): Observable<Product>;
}
