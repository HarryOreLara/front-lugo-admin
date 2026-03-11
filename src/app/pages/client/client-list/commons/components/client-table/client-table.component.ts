import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '@class/index';
import { IParameterEnum } from '@interfaces/index';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-client-table-ui',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css'],
})
export class ClientTableComponent {
  @Input() isLoading: boolean;
  @Input() clients: Client[];
  @Input() documentsType: IParameterEnum[];
  @Output() public newClientEmit: EventEmitter<void> = new EventEmitter<void>();

  public constructor() {}

  public clear(table: Table) {
    table.clear();
  }

  public newClient() {
    this.newClientEmit.emit();
  }

  public deleteClient() {}

  public updateClient() {}
}
