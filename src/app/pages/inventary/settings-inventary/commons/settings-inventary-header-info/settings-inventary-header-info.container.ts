import { Component, Input } from '@angular/core';
import { Product } from '@class/index';

@Component({
  selector: 'app-settings-inventary-header-info',
  templateUrl: './settings-inventary-header-info.container.html',
})
export class SettingsInventaryHeaderInfoContainer {
    @Input() public products: Product[];
  
}
