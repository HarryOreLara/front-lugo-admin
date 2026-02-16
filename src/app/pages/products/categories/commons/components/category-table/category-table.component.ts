import { Component, Input } from '@angular/core';
import { Category } from '@class/category/category.class';
import { Status } from '@enums/status.enum';
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

  public items = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];

  public clear(table: Table) {
    table.clear();
  }

  public getSeverity(status: string) {
    switch (status) {
      case Status.ACTIVE:
        return 'success';
      default:
        return 'danger';
    }
  }
}
