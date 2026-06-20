import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Owner } from '@class/owner/owner.class';

@Component({
  selector: 'app-owner-table-ui',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css'],
})
export class OwnerTableComponent {
  @Input() public owners: Owner[] = [];
  @Input() isLoading = false;

  @Output() public newOwnerEmit: EventEmitter<void> = new EventEmitter<void>();

  public newOwner() {
    this.newOwnerEmit.emit();
  }
  public updateOwner() {}
  public deleteOwner() {}
}
