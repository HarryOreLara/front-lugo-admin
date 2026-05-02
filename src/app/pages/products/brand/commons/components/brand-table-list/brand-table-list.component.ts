import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';

@Component({
  selector: 'app-brand-table-list-ui',
  templateUrl: './brand-table-list.component.html',
  styleUrls: ['./brand-table-list.component.css']
})
export class BrandTableListComponent {
    @Input() public brands: Brand[];


  @Input() public isLoading: boolean;


  public updateBrand(brand: any){}


  public deleteBrand(brand: any){}

}
