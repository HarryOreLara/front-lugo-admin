import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affiliated-stores-table-ui',
  templateUrl: './affiliated-stores-table.component.html',
  styleUrls: ['./affiliated-stores-table.component.css'],
})
export class AffiliatedStoresTableComponent {
  @Input() public isLoading: boolean;
  @Input() public stores: any[] = [];

  @Output() public newStoreEmit: EventEmitter<void> = new EventEmitter<void>();

  newStore() {
    this.newStoreEmit.emit();
  }

  updateStore() {}

  deleteStore() {}
}
