import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryFormPresenter } from './category.form.presenter';
import { Category } from '@class/category/category.class';
import { IChannel } from '@interfaces/index';
import { CHANNEL_CONSTANT } from '@constants/channel.constant';

@Component({
  selector: 'app-modal-new-category-ui',
  templateUrl: './modal-new-category.component.html',
  styleUrls: ['./modal-new-category.component.css'],
})
export class ModalNewCategoryComponent {
  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;
  @Input() category: Category;

  public channels: Array<IChannel> = CHANNEL_CONSTANT;

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  @Output() saveCategoryEmit: EventEmitter<Category> =
    new EventEmitter<Category>();

  @Output() updateCategoryEmit: EventEmitter<{
    category: Category;
    id: number;
  }> = new EventEmitter<{ category: Category; id: number }>();
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

  public updateCategory() {
    this.updateCategoryEmit.emit({
      category: this.categoryFormPresenter.Form.getRawValue(),
      id: this.category.id!,
    });
  }

  public createControls() {
    this.categoryFormPresenter.createForm();
  }
}
