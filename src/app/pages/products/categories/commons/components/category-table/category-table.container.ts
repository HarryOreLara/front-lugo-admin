import { Component, OnInit } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryFacade } from '@patterns//facade/category.facade';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.container.html',
})
export class CategoryTableContainer implements OnInit {
  public isLoading$: Subject<void> = new Subject<void>();
  public categories$ = new BehaviorSubject<Category[]>([]);

  public constructor(private readonly categoryFacade: CategoryFacade) {
    this.categories$ = categoryFacade.categories$;
  }

  ngOnInit(): void {
    this.categoryFacade.getAllCategories();
  }
}
