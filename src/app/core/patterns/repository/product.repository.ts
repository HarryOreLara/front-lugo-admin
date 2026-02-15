import { Product } from '@class/index';
import { Observable } from 'rxjs';

export interface ProductRepository {
  getAllProduct(page: number, size: number): Observable<Product[]>;
  findProductById(id: number): Observable<Product>;
  createProduct(product: Product): Observable<Product>;
  updateProduct(id: number, product: Product): Observable<Product>;
  deleteProduct(id: number): Observable<Product>;
}
