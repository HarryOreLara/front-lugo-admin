import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PurchaseDataClientPresenter } from './commons/purchase-data-client.presenter';
import { IParameterEnum } from '@interfaces/index';
import { IPurchaseDataClientForm } from './commons/purchase-data-client.form';
import { Client } from '@class/index';

@Component({
  selector: 'app-purchase-data-client-ui',
  templateUrl: './purchase-data-client.component.html',
  styleUrls: ['./purchase-data-client.component.css'],
})
export class PurchaseDataClientComponent {
  @Input() public documentsType: IParameterEnum[];
  @Input() public client: Client;
  @Output() public searchClientEmit: EventEmitter<IPurchaseDataClientForm> =
    new EventEmitter<IPurchaseDataClientForm>();
  @Output() public newClientEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public readonly purchaseDataClientPresenter: PurchaseDataClientPresenter,
  ) {
    this.createControls();
  }

  private createControls() {
    this.purchaseDataClientPresenter.createForm();
  }

  public searchClient() {
    if (this.purchaseDataClientPresenter.Invalid) return;

    this.searchClientEmit.emit(
      this.purchaseDataClientPresenter.Form.getRawValue(),
    );
  }

  public newClient() {
    this.newClientEmit.emit();
  }
}
