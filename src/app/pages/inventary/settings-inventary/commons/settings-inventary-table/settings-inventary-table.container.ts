import { Component, Input } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { ModalService } from '@components//host/app-modal.service';
import { INVENTARY_MOVEMENT_CONSTANT } from '@constants/inventary-movement.constant';
import { MODELS_ENUM } from '@enums/models.enum';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-settings-inventary-table',
  templateUrl: './settings-inventary-table.container.html',
})
export class SettingsInventaryTableContainer {
  @Input() public inventaryMovements: InventaryMovement[];

  public inventarymovementsType: Array<IParameterEnum> =
    INVENTARY_MOVEMENT_CONSTANT;

  public constructor(private readonly modalService: ModalService) {}

  public newInventary() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_INVENTARY, {});
  }
}
