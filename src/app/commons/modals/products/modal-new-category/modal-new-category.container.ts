import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Category } from '@class/category/category.class';
import { ModalService } from '@components//host/app-modal.service';
import { CategoryFacade } from '@patterns//facade/category.facade';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modal-new-category',
  templateUrl: './modal-new-category.container.html',
})
export class ModalNewCategoryContainer implements OnInit, OnDestroy {
  @Input() title: string = 'Nuevo producto';
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly categoryFacade: CategoryFacade,
    private readonly modalService: ModalService,
  ) {
    this.isLoading$ = categoryFacade.loading$;
  }
  ngOnInit(): void {
    this.categoryFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
  }

  public saveCategory(category: Category) {
    this.categoryFacade.createCategory(category);
  }

  public close() {
    this.modalService.close();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
