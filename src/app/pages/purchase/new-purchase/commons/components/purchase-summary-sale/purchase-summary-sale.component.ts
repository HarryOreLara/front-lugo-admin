import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../interfaces/car-tem.interface';
import { IParameterEnum } from '@interfaces/index';
import { PurchaseFormPresenter } from '@pages/purchase/new-purchase/new-purchase.presenter';
import { IPurchaseForm } from '../../interfaces/purchase-form.interface';
import { PurchaseDataClientPresenter } from '../purchase-data-client/commons/purchase-data-client.presenter';
import { EventBussService } from '@states/event-buss/event-buss.service';

@Component({
  selector: 'app-purchase-summary-sale-ui',
  templateUrl: './purchase-summary-sale.component.html',
  styleUrls: ['./purchase-summary-sale.component.css'],
})
export class PurchaseSummarySaleComponent implements OnInit {
  private _cartItems: CartItem[] = [];

  @Input()
  set cartItems(value: CartItem[]) {
    this._cartItems = value;

    this.purchaseFormPresenter.setItems(value);
    this.purchaseFormPresenter.recalculateTotals();
  }
  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  public get totalCartItem(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  }

  public get disableNewPurchase(): boolean {
    return (
      this.purchaseDataClientPresenter.Invalid ||
      this.purchaseFormPresenter.Invalid ||
      this.isLoading ||
      this.cartItems.length <= 0
    );
  }

  @Input() public currencys: IParameterEnum[] = [];
  @Input() public isLoading: boolean;
  @Input() public invoiceTypes: IParameterEnum[] = [];
  @Input() public methodPayments: IParameterEnum[] = [];
  @Output() public newPurchaseEmit: EventEmitter<IPurchaseForm> =
    new EventEmitter<IPurchaseForm>();

  constructor(
    public readonly purchaseFormPresenter: PurchaseFormPresenter,
    public readonly purchaseDataClientPresenter: PurchaseDataClientPresenter,
    private readonly eventBussService: EventBussService,
  ) {
    this.createControls();
  }

  ngOnInit(): void {
    this.eventBussService.on<boolean>('lugo-purchase-reset').subscribe({
      next: (value) => {
        if (!value) return;

        this.purchaseFormPresenter.Form.reset();
        this.purchaseFormPresenter.initForm();
        this.purchaseFormPresenter.Form.updateValueAndValidity();
      },
    });
  }

  public newPurchase() {
    this.newPurchaseEmit.emit(this.purchaseFormPresenter.Form.getRawValue());
  }

  private createControls() {
    this.purchaseFormPresenter.initForm();
    this.purchaseFormPresenter.createForm();
  }
}
