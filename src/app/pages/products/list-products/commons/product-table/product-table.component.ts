import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { Status } from '@enums/status.enum';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-product-table-ui',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  @Input() products: Array<Product>;
  @Input() isLoading: boolean;

  searchValue: string = '';
  representatives!: any[];
  activityValues: number[] = [0, 100];
  statuses!: any[];

  constructor() {}

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  getSeverity(status: string) {
    switch (status) {
      case Status.ACTIVE:
        return 'success';
      default:
        return 'danger';
    }
  }
}
