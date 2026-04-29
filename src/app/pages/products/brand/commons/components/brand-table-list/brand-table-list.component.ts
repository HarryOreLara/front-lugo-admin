import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-table-list-ui',
  templateUrl: './brand-table-list.component.html',
  styleUrls: ['./brand-table-list.component.css']
})
export class BrandTableListComponent {

  @Input() public isLoading: boolean;


  public updateBrand(brand: any){}


  public deleteBrand(brand: any){}

}
