import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { MODELS_ENUM } from '@enums/models.enum';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.container.html',
})
export class ClientTableContainer implements OnInit {
  @Input() clients: Client[];

  documentsType: IParameterEnum[];

  public constructor(private readonly modalService: ModalService) {}

  public ngOnInit(): void {
    this.documentsType = DOCUMENTS_TYPE;
  }

  public newClient() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_CLIENT, {});
  }
}
