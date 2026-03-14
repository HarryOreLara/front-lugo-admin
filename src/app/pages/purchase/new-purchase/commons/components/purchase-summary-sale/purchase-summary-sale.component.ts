import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../interfaces/car-tem.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-summary-sale-ui',
  templateUrl: './purchase-summary-sale.component.html',
  styleUrls: ['./purchase-summary-sale.component.css'],
})
export class PurchaseSummarySaleComponent implements OnInit {
  color3: string;
  size3: string;
  liked1: boolean;
  quantity1: number;

  @Input() public cartItems: CartItem[] = [];

  constructor(private fb: FormBuilder) {}

  public get totalCartItem(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  }

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      tipoComprobante: ['boleta', Validators.required],
      metodoPago: ['efectivo', Validators.required],
      moneda: [null, Validators.required],
      voucher: [''],
    });
  }

  saleForm: FormGroup;

  tiposComprobante = [
    { label: 'Boleta', value: 'boleta' },
    { label: 'Factura', value: 'factura' },
  ];

  metodosPago = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Tarjeta', value: 'tarjeta' },
    { label: 'Transferencia', value: 'transferencia' },
    { label: 'Yape / Plin', value: 'yape_plin' },
  ];

  monedas = [
    { name: 'Soles (PEN)', value: 'PEN' },
    { name: 'Dólares (USD)', value: 'USD' },
  ];
}
