import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { IParameterEnum } from '@interfaces/index';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-settings-inventary-table-ui',
  templateUrl: './settings-inventary-table.component.html',
  styleUrls: ['./settings-inventary-table.component.css'],
})
export class SettingsInventaryTableComponent {
  @Input() public isLoading: boolean;
  @Input() public inventaryMovements: InventaryMovement[];
  @Output() public newInventaryEmit: EventEmitter<void> =
    new EventEmitter<void>();
  @Input() public inventarymovementsType: Array<IParameterEnum>;
  clear(table: Table) {
    table.clear();
  }

  public newInventary() {
    this.newInventaryEmit.emit();
  }
}
