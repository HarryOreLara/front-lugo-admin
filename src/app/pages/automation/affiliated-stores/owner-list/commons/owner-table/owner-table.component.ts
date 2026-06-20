import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-owner-table-ui',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css'],
})
export class OwnerTableComponent {
  @Input() isLoading = false;

  @Output() public newOwnerEmit: EventEmitter<void> = new EventEmitter<void>();

  public owners = [];

  public newOwner() {
    this.newOwnerEmit.emit();
  }
  public updateOwner() {}
  public deleteOwner() {}
}
