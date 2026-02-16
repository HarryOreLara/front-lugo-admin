import { Product } from '@class/index';
import { map } from 'rxjs/operators';
import { ProductRepository } from '../repository/product.repository';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { IGenericArrays } from '@interfaces/genericas/IGeneric.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl implements ProductRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  public getAllProduct(page: number, size: number): Observable<Product[]> {
    const direction = `${this.apiUrl}/product/getAll`;

    return this.http
      .get<IGenericArrays<Product[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Product[]>) =>
          response.data.map((product) => Product.fromJson(product)),
        ),
      );
  }

  findProductById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  public createProduct(product: Product): Observable<Product> {
    const direction = `${this.apiUrl}/product/create`;

    console.log({
      product
    });

    return this.http
      .post<IGenericArrays<Product>>(direction, product)
      .pipe(
        map((response: IGenericArrays<Product>) => Product.fromJson(response)),
      );
  }
  updateProduct(id: number, entidadInstancia: Product): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  deleteProduct(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}
