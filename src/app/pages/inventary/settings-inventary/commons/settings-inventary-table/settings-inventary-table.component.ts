import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-settings-inventary-table-ui',
  templateUrl: './settings-inventary-table.component.html',
  styleUrls: ['./settings-inventary-table.component.css'],
})
export class SettingsInventaryTableComponent {
  @Input() public inventories: any[] = [];
  @Input() public isLoading: boolean;

  @Output() public newInventaryEmit: EventEmitter<void> =
    new EventEmitter<void>();

  clear(table: Table) {
    table.clear();
  }

  public newInventary() {
    this.newInventaryEmit.emit();
  }
}
