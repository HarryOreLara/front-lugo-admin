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
