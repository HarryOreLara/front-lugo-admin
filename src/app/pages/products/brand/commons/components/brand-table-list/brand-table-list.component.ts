import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '@class/brand/brand.class';

@Component({
  selector: 'app-brand-table-list-ui',
  templateUrl: './brand-table-list.component.html',
  styleUrls: ['./brand-table-list.component.css'],
})
export class BrandTableListComponent {
  @Input() public brands: Brand[];
  @Input() public isLoading: boolean;
  @Output() updateBrandEmitter: EventEmitter<Brand> = new EventEmitter<Brand>();

  public updateBrand(brand: Brand) {
    this.updateBrandEmitter.emit(brand);
  }

  public deleteBrand(brand: any) {}
}
