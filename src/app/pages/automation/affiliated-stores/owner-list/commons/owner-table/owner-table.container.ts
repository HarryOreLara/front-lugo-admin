import { Component, Input } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.container.html',
})
export class OwnerTableContainer {
  @Input() public owners: Owner[] = [];

  constructor(private readonly modalService: ModalService) {}

  public newOwner() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_OWNER, {});
  }
}
