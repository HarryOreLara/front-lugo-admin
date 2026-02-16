import { Injectable, Inject } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryRepository } from '@patterns//repository/category.repository';
import { Observable } from 'rxjs';
import { CATEGORY_REPOSITORY } from 'src/app/commons/tokens/category.token';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  getALlCategories(): Observable<Category[]> {
    return this.categoryRepository.getAllCategory(1, 20);
  }

  findOneCategory(id: number): Observable<Category> {
    return this.categoryRepository.findCategoryById(id);
  }

  createCategory(category: Category): Observable<Category> {
    return this.categoryRepository.createCategory(category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.categoryRepository.updateCategory(id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryRepository.deleteCategory(id);
  }
}
