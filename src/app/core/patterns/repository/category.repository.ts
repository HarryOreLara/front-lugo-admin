import { Category } from '@class/category/category.class';
import { Observable } from 'rxjs';

export interface CategoryRepository {
  getAllCategory(page: number, size: number): Observable<Category[]>;
  findCategoryById(id: number): Observable<Category>;
  findCategoryByName(category: Category): Observable<Category>;
  createCategory(category: Category): Observable<Category>;
  updateCategory(id: number, entidadInstancia: Category): Observable<Category>;
  deleteCategory(id: number): Observable<Category>;
}
