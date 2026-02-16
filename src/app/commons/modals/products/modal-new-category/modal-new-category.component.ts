import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryFormPresenter } from './category.form.presenter';
import { Category } from '@class/category/category.class';

@Component({
  selector: 'app-modal-new-category-ui',
  templateUrl: './modal-new-category.component.html',
  styleUrls: ['./modal-new-category.component.css'],
})
export class ModalNewCategoryComponent {
  @Input() public title: string = 'Nuevo producto';
  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  @Output() saveCategoryEmit: EventEmitter<Category> =
    new EventEmitter<Category>();
  public constructor(
    public readonly categoryFormPresenter: CategoryFormPresenter,
  ) {
    this.createControls();
  }

  public close() {
    this.closeEmit.emit();
  }

  public saveCategory() {
    this.saveCategoryEmit.emit(this.categoryFormPresenter.Form.getRawValue());
  }

  public createControls() {
    this.categoryFormPresenter.createForm();
  }
}
