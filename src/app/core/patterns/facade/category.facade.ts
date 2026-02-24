import { Injectable } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryService } from '@service/category/category.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryFacade {
  public categories$ = new BehaviorSubject<Category[]>([]);
  public category$ = new BehaviorSubject<Category>(new Category());
  public loading$ = new BehaviorSubject<boolean>(false);
  public closeModal$ = new Subject<void>();
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
      .subscribe();
  }

  findOneCategory(id: number) {
    this.categoryService
      .findOneCategory(id)
      .subscribe((category) => this.category$.next(category));
  }

  updateCategory(category: Category, id: number) {
    const payload = Category.toJson(category);

    this.loading$.next(true);

    this.categoryService
      .updateCategory(id, payload)
      .pipe(
        tap((updatedCategory) => {
          const updatedList = this.categories$.value.map((category) =>
            category.id === id ? { ...category, ...updatedCategory } : category,
          );

          this.categories$.next(updatedList);

          this.closeModal$.next();
        }),

        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
