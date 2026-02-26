import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-header-info',
  templateUrl: './product-header-info.container.html',
})
export class ProductHeaderInfoContainer {
  @Input() public products$ = new BehaviorSubject<Product[]>([]);
  @Input() public product$ = new BehaviorSubject<Product>(new Product());
}
