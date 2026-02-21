import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Category } from '@class/category/category.class';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-category-table-ui',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
// category-table.component.ts
export class CategoryTableComponent {
  @Input() public isLoading: boolean;
  @Input() public categories: Array<Category>;

  constructor(private readonly modalService: ModalService) {}

  public updateCategory(category: Category) {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_CATEGORY, {
      category: category,
    });
  }

  public deleteCategory(category: Category) {
    console.log('Eliminar categoría:', category);
  }
}
