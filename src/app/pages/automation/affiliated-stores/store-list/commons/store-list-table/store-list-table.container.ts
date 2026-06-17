import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-store-list-table',
  templateUrl: './store-list-table.container.html',
})
export class StoreListTableContainer {
  constructor(private readonly modalService: ModalService) {}

  public newStore() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_STORE, {});
  }
}
