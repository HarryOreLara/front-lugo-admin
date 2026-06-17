import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owner-table-ui',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css'],
})
export class OwnerTableComponent {
  @Input() isLoading = false;
  public owners = [];

  public newOwner() {}
  public updateOwner() {}
  public deleteOwner() {}
}
