import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';

@Component({
  selector: 'app-brand-table-list',
  templateUrl: './brand-table-list.container.html',
})
export class BrandTableListContainer {

    @Input() public brands: Brand[];
  
}
