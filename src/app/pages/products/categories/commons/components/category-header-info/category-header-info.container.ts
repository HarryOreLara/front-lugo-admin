import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-category-header-info',
  templateUrl: './category-header-info.container.html',
})
export class CategoryHeaderInfoContainer {
  constructor(private readonly modalService: ModalService) {}

  public newCategory() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_CATEGORY, {});
  }
}
