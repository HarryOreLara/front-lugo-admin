import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-store-list-table-ui',
  templateUrl: './store-list-table.component.html',
  styleUrls: ['./store-list-table.component.css'],
})
export class StoreListTableComponent {
  @Input() public isLoading: boolean;
  @Input() public stores: any[] = [];

  @Output() public newStoreEmit: EventEmitter<void> = new EventEmitter<void>();

  newStore() {
    this.newStoreEmit.emit();
  }

  updateStore() {}

  deleteStore() {}
}
