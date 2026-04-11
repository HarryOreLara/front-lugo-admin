import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseDataClientPresenter } from './commons/purchase-data-client.presenter';
import { IParameterEnum } from '@interfaces/index';
import { IPurchaseDataClientForm } from './commons/purchase-data-client.form';
import { Client } from '@class/index';
import { EventBussService } from '@states/event-buss/event-buss.service';

@Component({
  selector: 'app-purchase-data-client-ui',
  templateUrl: './purchase-data-client.component.html',
  styleUrls: ['./purchase-data-client.component.css'],
})
export class PurchaseDataClientComponent implements OnInit {
  public get clientData(): Client {
    return this.client;
  }

  @Input() public documentsType: IParameterEnum[];
  @Input() public client: Client;
  @Output() public searchClientEmit: EventEmitter<IPurchaseDataClientForm> =
    new EventEmitter<IPurchaseDataClientForm>();
  @Output() public newClientEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public readonly purchaseDataClientPresenter: PurchaseDataClientPresenter,
    private readonly eventBussService: EventBussService,
  ) {
    this.createControls();
  }

  public ngOnInit(): void {
    this.eventBussService.on<boolean>('lugo-purchase-reset').subscribe({
      next: (value) => {
        console.log({value});
        if (!value) return;

        this.purchaseDataClientPresenter.Form.reset();
        this.purchaseDataClientPresenter.initForm();
        this.purchaseDataClientPresenter.Form.updateValueAndValidity();
      },
    });
  }

  private createControls() {
    this.purchaseDataClientPresenter.initForm();
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
