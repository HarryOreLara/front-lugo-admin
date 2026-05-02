import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';

@Component({
  selector: 'app-brand-ui',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  @Input() public brands: Brand[];
}
