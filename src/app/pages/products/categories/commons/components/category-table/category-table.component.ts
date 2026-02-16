import { Component, Input } from '@angular/core';
import { Category } from '@class/category/category.class';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-category-table-ui',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent {
  @Input() public isLoading: boolean;
  @Input() public categories: Array<Category> = [];

  searchValue: string;

  public clear(table: Table) {
    table.clear();
  }

  public getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      default:
        return 'warning';
    }
  }
}
