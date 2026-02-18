import { Injectable } from '@angular/core';
import { CategoryRepository } from '../repository/category.repository';
import { Category } from '@class/category/category.class';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepositoryImpl implements CategoryRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  public getAllCategory(page: number, size: number): Observable<Category[]> {
    const direction = `${this.apiUrl}/category/getAll`;

    return this.http
      .get<IGenericArrays<Category[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Category[]>) =>
          response.data.map((product) => Category.fromJson(product)),
        ),
      );
  }
  public findCategoryById(id: number): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  public findCategoryByName(category: Category): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  public createCategory(payload: Category): Observable<Category> {
    const direction = `${this.apiUrl}/category/create`;

    return this.http
      .post<IGeneric<Category>>(direction, payload)
      .pipe(map((response) => Category.fromJson(response.data)));
  }

  public updateCategory(id: number, category: Category): Observable<Category> {
    const direction = `${this.apiUrl}/category/update`;

    return this.http
      .patch<IGeneric<Category>>(direction, category, {
        params: { id },
      })
      .pipe(map((response) => Category.fromJson(response.data)));
  }
  public deleteCategory(id: number): Observable<Category> {
    throw new Error('Method not implemented.');
  }
}
