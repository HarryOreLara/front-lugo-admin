import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import {
  LOWER_STOCK_PRODUCT,
  LOWER_STOCK_PRODUCT_PERCENT,
} from '@constants/product-info.constant';
import { Channel } from '@enums/channel.enum';

@Component({
  selector: 'app-product-header-info-ui',
  templateUrl: './product-header-info.component.html',
  styleUrls: ['./product-header-info.component.css'],
})
export class ProductHeaderInfoComponent {
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

  get productsLastMonth(): number {
    if (!this.products?.length) return 0;

    const now = new Date();

    const lastMonth = new Date();
    lastMonth.setMonth(now.getMonth() - 1);

    return this.products.filter((product) => {
      if (!product.createdAt) return false;

      const createdAt = new Date(product.createdAt);

      return createdAt >= lastMonth && createdAt <= now;
    }).length;
  }

  public get totalInventoryValue(): number {
    return (
      this.products?.reduce((total, product) => {
        const physicalPrice = product.prices.find(
          (price) => price.channel === Channel.PHYSICAL,
        );

        if (!physicalPrice) return total;

        return total + physicalPrice.salePrice * product.stock;
      }, 0) ?? 0
    );
  }
}
