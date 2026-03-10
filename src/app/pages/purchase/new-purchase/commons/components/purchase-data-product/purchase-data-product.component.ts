import { Component } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  unitPrice: number;
}
@Component({
  selector: 'app-purchase-data-product-ui',
  templateUrl: './purchase-data-product.component.html',
  styleUrls: ['./purchase-data-product.component.css'],
})
export class PurchaseDataProductComponent {
  // Datos de ejemplo — reemplaza con tu servicio real
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Smartphone Galaxy S23 Ultra',
      sku: 'SAM-S23U-512BK',
      quantity: 1,
      unitPrice: 4299.0,
    },
    {
      id: 2,
      name: 'Funda Silicona Transparente',
      sku: 'ACC-CASE-S23U',
      quantity: 2,
      unitPrice: 45.0,
    },
  ];

  increaseQty(item: CartItem): void {
    item.quantity++;
  }

  decreaseQty(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  get total(): number {
    return this.cartItems.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0);
  }
}
