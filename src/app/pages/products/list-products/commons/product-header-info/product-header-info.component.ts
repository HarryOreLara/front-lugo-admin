import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { Channel } from '@enums/channel.enum';

@Component({
  selector: 'app-product-header-info-ui',
  templateUrl: './product-header-info.component.html',
  styleUrls: ['./product-header-info.component.css'],
})
export class ProductHeaderInfoComponent {
  @Input() products: Array<Product>;

  public get isLowStockProducts(): number {
    return this.products.filter((product) => product.stock < 10).length;
  }

  public get lowStockPercentage(): number {
    if (!this.products.length) return 0;

    const lowStockCount = this.products.filter(
      (product) => product.stock < 10,
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
