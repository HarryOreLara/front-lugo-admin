import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { LOWER_STOCK_PRODUCT_PERCENT } from '@constants/product-info.constant';
import { InventaryMovementType } from '@enums/inventary-movement.enum';
import { filter } from 'rxjs';

export interface MovementStat {
  totalCost: number;
  quantity: number;
  percentage: number;
}

export type MovementStatsMap = Record<InventaryMovementType, MovementStat>;

@Component({
  selector: 'app-settings-inventary-header-info-ui',
  templateUrl: './settings-inventary-header-info.component.html',
  styleUrls: ['./settings-inventary-header-info.component.css'],
})
export class SettingsInventaryHeaderInfoComponent {
  public lowerStockProductPercent: number = LOWER_STOCK_PRODUCT_PERCENT;
  @Input() products: Array<Product>;

  private _inventaryMovements: InventaryMovement[] = [];

  @Input()
  set inventaryMovements(value: InventaryMovement[]) {
    this._inventaryMovements = value;
    this.movementStats = this.calculateMovementStats(value);
  }
  get inventaryMovements(): InventaryMovement[] {
    return this._inventaryMovements;
  }

  MovementType = InventaryMovementType;

  movementStats: MovementStatsMap = this.buildEmptyStats();

  private calculateMovementStats(
    movements: InventaryMovement[],
  ): MovementStatsMap {
    const stats = this.buildEmptyStats();

    for (const mov of movements) {
      const type = mov.typeInventary as InventaryMovementType;
      stats[type].totalCost += mov.totalCost;
      stats[type].quantity += mov.quantity;
    }

    const totalQuantity = Object.values(stats).reduce(
      (sum, s) => sum + s.quantity,
      0,
    );

    for (const type of Object.values(InventaryMovementType)) {
      stats[type].percentage =
        totalQuantity > 0
          ? Math.round((stats[type].quantity / totalQuantity) * 100 * 10) / 10
          : 0;
    }

    return stats;
  }

  private buildEmptyStats(): MovementStatsMap {
    return {
      [InventaryMovementType.INBOUND]: {
        totalCost: 0,
        quantity: 0,
        percentage: 0,
      },
      [InventaryMovementType.OUTBOUND]: {
        totalCost: 0,
        quantity: 0,
        percentage: 0,
      },
      [InventaryMovementType.ADJUSTMENT]: {
        totalCost: 0,
        quantity: 0,
        percentage: 0,
      },
      [InventaryMovementType.RETURN]: {
        totalCost: 0,
        quantity: 0,
        percentage: 0,
      },
    };
  }
}
