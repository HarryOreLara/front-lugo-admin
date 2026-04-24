import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-table-list-ui',
  templateUrl: './employee-table-list.component.html',
  styleUrls: ['./employee-table-list.component.css']
})
export class EmployeeTableListComponent {

  @Input() public isLoading: boolean;
  @Input() public employees: any;

}
