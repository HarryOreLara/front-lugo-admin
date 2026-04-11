import { Product } from '@class/index';
import { map } from 'rxjs/operators';
import { ProductRepository } from '../repository/product.repository';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductRquest } from 'src/app/commons/modals/products/modal-new-product/modals/product-request.modal';
import { Channel } from '@enums/channel.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl implements ProductRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  public findOneProductByBarCode(barCode: string): Observable<Product> {
    const direction = `${this.apiUrl}/product/getOneProductByBarCode`;

    return this.http
      .get<IGeneric<Product>>(direction, { params: { barCode } })
      .pipe(
        map((response: IGeneric<Product>) => Product.fromJson(response.data)),
      );
  }

  public getAllProduct(
    page: number,
    size: number,
    channel: Channel,
  ): Observable<Product[]> {
    const direction = `${this.apiUrl}/product/getAllProducts`;

    return this.http
      .get<IGenericArrays<Product[]>>(direction, { params: { channel } })
      .pipe(
        map((response: IGenericArrays<Product[]>) =>
          response.data.map((product) => Product.fromJson(product)),
        ),
      );
  }

  findProductById(id: number): Observable<Product> {
    const direction = `${this.apiUrl}/product/getOneProduct`;

    return this.http
      .get<IGeneric<Product>>(direction, { params: { id } })
      .pipe(
        map((response: IGeneric<Product>) => Product.fromJson(response.data)),
      );
  }
  public createProduct(product: IProductRquest): Observable<Product> {
    const direction = `${this.apiUrl}/product/createProduct`;

    return this.http
      .post<IGeneric<Product>>(direction, product)
      .pipe(
        map((response: IGeneric<Product>) => Product.fromJson(response.data)),
      );
  }
  public updateProduct(
    id: number,
    product: IProductRquest,
  ): Observable<Product> {
    const direction = `${this.apiUrl}/product/updateProduct`;

    return this.http
      .patch<IGeneric<Product>>(direction, product, { params: { id } })
      .pipe(
        map((response: IGeneric<Product>) => Product.fromJson(response.data)),
      );
  }
  deleteProduct(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}
