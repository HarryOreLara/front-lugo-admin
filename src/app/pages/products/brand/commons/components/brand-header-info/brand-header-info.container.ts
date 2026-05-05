import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-brand-header-info',
  templateUrl: './brand-header-info.container.html',
})
export class BrandHeaderInfoContainer {
  constructor(private readonly modalService: ModalService) {}

  public newBrand() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_BRAND, {});
  }
}
