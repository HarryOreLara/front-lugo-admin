import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '@class/index';
import { ClientFormPresenter } from './client-form.presenter';
import { IParameterEnum } from '@interfaces/index';
import { IClientForm } from './models/client-form.model';

@Component({
  selector: 'app-modal-new-client-ui',
  templateUrl: './modal-new-client.component.html',
  styleUrls: ['./modal-new-client.component.css'],
})
export class ModalNewClientComponent {
  @Input() public visibleModal: boolean = true;
  @Input() public client: Client;
  @Input() public isLoading: boolean;
  @Input() public documentsType: IParameterEnum[];
  @Input() public channels: IParameterEnum[];

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveClientEmit: EventEmitter<IClientForm> =
    new EventEmitter<IClientForm>();
  constructor(public readonly clientPresenter: ClientFormPresenter) {
    this.createControls();
  }

  public saveClient() {
    this.saveClientEmit.emit(this.clientPresenter.Form.getRawValue());
  }

  public updateClient() {}

  public close() {
    this.closeEmit.emit();
  }

  private createControls() {
    this.clientPresenter.createForm();
  }
}
