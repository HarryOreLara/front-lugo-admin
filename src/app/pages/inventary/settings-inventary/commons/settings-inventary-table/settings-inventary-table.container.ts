import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-settings-inventary-table',
  templateUrl: './settings-inventary-table.container.html',
})
export class SettingsInventaryTableContainer {
  public constructor(private readonly modalService: ModalService) {}

  public newInventary() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_INVENTARY, {});
  }
}
