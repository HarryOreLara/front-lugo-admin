import { Component, Input } from '@angular/core';
import { Category } from '@class/category/category.class';
import { CategoryFacade } from '@patterns//facade/category.facade';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-new-category',
  templateUrl: './modal-new-category.container.html',
})
export class ModalNewCategoryContainer {
  @Input() title: string = 'Nuevo producto';
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  constructor(private readonly categoryFacade: CategoryFacade) {}

  public saveCategory(category: Category) {
    this.categoryFacade.createCategory(category);
  }
}
