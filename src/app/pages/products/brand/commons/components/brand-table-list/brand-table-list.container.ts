import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-brand-table-list',
  templateUrl: './brand-table-list.container.html',
})
export class BrandTableListContainer {
  @Input() public brands: Brand[];

  public constructor(private readonly modalService: ModalService) {}

  public updateBrand(brand: Brand) {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_BRAND, {
      brand: brand,
    });
  }
}
