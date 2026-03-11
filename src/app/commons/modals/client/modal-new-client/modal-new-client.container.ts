import { Component, Input } from '@angular/core';
import { Client } from '@class/index';
import { CHANNEL_CONSTANT } from '@constants/channel.constant';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-modal-new-client',
  templateUrl: './modal-new-client.container.html',
})
export class ModalNewClientContainer {
  @Input() client: Client;
  public visibleModal: boolean = true;

  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  public channels: IParameterEnum[] = CHANNEL_CONSTANT;
}
