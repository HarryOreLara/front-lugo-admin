import { Component, Input } from '@angular/core';
import { Client } from '@class/index';

@Component({
  selector: 'app-client-list-ui',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  @Input() clients: Client[];
}
