import { Component, Input } from '@angular/core';
import { Owner } from '@class/owner/owner.class';

@Component({
  selector: 'app-owner-list-ui',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent {
  @Input() public owners: Owner[] = [];
}
