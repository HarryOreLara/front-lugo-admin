import { Injectable } from '@angular/core';
import { BrandRepository } from '../repository/brand.repository';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Brand } from '@class/brand/brand.class';
import { map, Observable } from 'rxjs';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { IBrandRequest } from 'src/app/commons/modals/products/modal-new-brand/models/brand-request.model';

@Injectable({
  providedIn: 'root',
})
export class BrandRepositoryImpl implements BrandRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}
  public getAllBrand(page: number, size: number): Observable<Brand[]> {
    const direction = `${this.apiUrl}/brand/getAllBrands`;

    console.log('LLAMADO');
    return this.http
      .get<IGenericArrays<Brand[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Brand[]>) =>
          response.data.map((product) => Brand.fromJson(product)),
        ),
      );
  }
  findBrandById(id: number): Observable<Brand> {
    throw new Error('Method not implemented.');
  }
  findBrandByName(brand: Brand): Observable<Brand> {
    throw new Error('Method not implemented.');
  }

  createBrand(brand: IBrandRequest): Observable<Brand> {
    const direction = `${this.apiUrl}/brand/createBrand`;

    return this.http
      .post<IGeneric<Brand>>(direction, brand)
      .pipe(map((response) => Brand.fromJson(response.data)));
  }

  updateBrand(id: number, brand: IBrandRequest): Observable<Brand> {
    const direction = `${this.apiUrl}/category/update`;

    return this.http
      .patch<IGeneric<Brand>>(direction, brand, {
        params: { id },
      })
      .pipe(map((response) => Brand.fromJson(response.data)));
  }
  deleteBrand(id: number): Observable<Brand> {
    throw new Error('Method not implemented.');
  }
}
