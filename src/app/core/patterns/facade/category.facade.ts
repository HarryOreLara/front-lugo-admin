import { Injectable } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryService } from '@service/category/category.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryFacade {
  categories$ = new BehaviorSubject<Category[]>([]);
  category$ = new BehaviorSubject<Category>(new Category());

  constructor(private readonly categoryService: CategoryService) {}

  getAllCategories() {
    this.categoryService
      .getALlCategories()
      .subscribe((categories) => this.categories$.next(categories));
  }

  createCategory(category: Category) {
    this.categoryService
      .createCategory(category)
      .subscribe((category) => this.category$.next(category));
  }

  findOneCategory(id: number) {
    this.categoryService
      .findOneCategory(id)
      .subscribe((category) => this.category$.next(category));
  }

//   updateCategory(category: Category) {
//     this.categoryService
//       .updateCategory(category)
//       .subscribe((category) => this.category$.next(category));
//   }
}
