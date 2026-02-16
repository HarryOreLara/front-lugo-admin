import { Injectable } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryService } from '@service/category/category.service';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  finalize,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryFacade {
  categories$ = new BehaviorSubject<Category[]>([]);
  category$ = new BehaviorSubject<Category>(new Category());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();

  private destroy$ = new Subject<void>();

  constructor(private readonly categoryService: CategoryService) {}

  getAllCategories() {
    this.categoryService
      .getALlCategories()
      .subscribe((categories) => this.categories$.next(categories));
  }

  createCategory(category: Category) {
    const payload = Category.toJson(category);

    this.loading$.next(true);

    this.categoryService
      .createCategory(payload)
      .pipe(
        tap((response) => {
          this.categories$.next([response, ...this.categories$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe((res) => {
        // const current = this.categories$.value;
        // this.categories$.next([res, ...current]);
        // this.closeModal$.next();
      });
  }

  findOneCategory(id: number) {
    this.categoryService
      .findOneCategory(id)
      .subscribe((category) => this.category$.next(category));
  }
}
