import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';

@Component({
  selector: 'app-settings-inventary-header-info',
  templateUrl: './settings-inventary-header-info.container.html',
})
export class SettingsInventaryHeaderInfoContainer {
    @Input() public products: Product[];

      @Input() public inventaryMovements: InventaryMovement[];
  
}
