import { Component, Input } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';

@Component({
  selector: 'app-settings-inventary-ui',
  templateUrl: './settings-inventary.component.html',
  styleUrls: ['./settings-inventary.component.css'],
})
export class SettingsInventaryComponent {
  @Input() public inventaryMovements: InventaryMovement[];
}
