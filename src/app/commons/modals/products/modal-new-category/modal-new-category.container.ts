import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Category } from '@class/category/category.class';
import { ModalService } from '@components//host/app-modal.service';
import { CategoryFacade } from '@patterns//facade/category.facade';
import { Subject } from 'rxjs';
import { CategoryFormPresenter } from './category.form.presenter';

@Component({
  selector: 'app-modal-new-category',
  templateUrl: './modal-new-category.container.html',
})
export class ModalNewCategoryContainer implements OnInit, OnDestroy {
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  @Input() category: Category;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly categoryFacade: CategoryFacade,
    private readonly modalService: ModalService,
    private readonly categoryPresenter: CategoryFormPresenter,
  ) {
    this.isLoading$ = categoryFacade.loading$;
  }

  ngOnInit(): void {
    console.log('ModalNewCategoryContainer - INIT');
    console.log('Categoría recibida:', this.category);

    if (this.category) {
      this.categoryPresenter.updateForm(this.category);
    } else {
      console.log('Es creación');
    }
  }

  public saveCategory(category: Category) {
    this.categoryFacade.createCategory(category);
  }

  public updateCategory({ category, id,}: { category: Category; id: number; }): void {
    this.categoryFacade.updateCategory(category, id);
  }

  public close() {
    this.modalService.close();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
