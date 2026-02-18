import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Category } from '@class/category/category.class';
import { Status } from '@enums/status.enum';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-category-table-ui',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent implements OnInit {
  @Input() public isLoading: boolean;
  @Input() public categories: Array<Category> = [];
  @ViewChild('menu') menu!: Menu;
  @Input() showDangerStyle = true;
  searchValue: string;

  public items: Array<MenuItem> = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Actualizar',
        icon: 'pi pi-pencil',
        command: () => {},
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {},
        styleClass: this.showDangerStyle ? 'menu-item-danger' : '',
      },
    ];
  }

  onHide() {
    // Opcional: agregar lógica cuando se abre el menú
  }

  onMenuHide() {
    // Opcional: agregar lógica cuando se cierra el menú
  }

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
