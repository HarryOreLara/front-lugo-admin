import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import {
  LOWER_STOCK_PRODUCT,
  LOWER_STOCK_PRODUCT_PERCENT,
} from '@constants/product-info.constant';

@Component({
  selector: 'app-settings-inventary-header-info-ui',
  templateUrl: './settings-inventary-header-info.component.html',
  styleUrls: ['./settings-inventary-header-info.component.css'],
})
export class SettingsInventaryHeaderInfoComponent {
  public lowerStockProductPercent: number = LOWER_STOCK_PRODUCT_PERCENT;
  @Input() products: Array<Product>;

  public get isLowStockProducts(): number {
    return this.products.filter(
      (product) => product.stock < LOWER_STOCK_PRODUCT,
    ).length;
  }

  public get lowStockPercentage(): number {
    if (!this.products.length) return 0;

    const lowStockCount = this.products.filter(
      (product) => product.stock < LOWER_STOCK_PRODUCT,
    ).length;

    return Number(((lowStockCount / this.products.length) * 100).toFixed(2));
  }
}
