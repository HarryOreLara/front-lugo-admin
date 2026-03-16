import { Component, OnInit } from '@angular/core';
import { EventBussService } from '@states/event-buss/event-buss.service';
import { CartItem } from '../../interfaces/car-tem.interface';
import { CURRENCY_TYPE } from '@constants/currency.constant';
import { IParameterEnum } from '@interfaces/index';
import { INVOICE_TYPE_CONSTANT } from '@constants/invoice-type.constant';
import { METHOD_PAYMENT_CONSTANT } from '@constants/method-payment.constant';
import { PurchaseFacade } from '@patterns//facade/purchase.facade';
import { IPurchaseForm } from '../../interfaces/purchase-form.interface';
import { ClientFacade } from '@patterns//facade/client.facade';

@Component({
  selector: 'app-purchase-summary-sale',
  templateUrl: './purchase-summary-sale.container.html',
})
export class PurchaseSummarySaleContainer implements OnInit {
  public cartItems: CartItem[] = [];
  public currencys: IParameterEnum[] = CURRENCY_TYPE;
  public invoiceTypes: IParameterEnum[] = INVOICE_TYPE_CONSTANT;
  public methodPayments: IParameterEnum[] = METHOD_PAYMENT_CONSTANT;

  public constructor(
    private readonly eventBussService: EventBussService,
    private readonly purchaseFacade: PurchaseFacade,
    private readonly clientFacade: ClientFacade,
  ) {}
  ngOnInit(): void {
    this.eventBussService.on<CartItem[]>('cart-item-shared').subscribe({
      next: (cartItems: CartItem[]) => {
        this.cartItems = [...cartItems];
      },
    });
  }

  public newPurchase(purchaseForm: IPurchaseForm) {
    const client = this.clientFacade.client$.value;
    this.purchaseFacade.createPurchase(purchaseForm, client);
  }
}
