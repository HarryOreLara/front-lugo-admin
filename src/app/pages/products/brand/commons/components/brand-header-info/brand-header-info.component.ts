import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-brand-header-info-ui',
  templateUrl: './brand-header-info.component.html',
  styleUrls: ['./brand-header-info.component.css'],
})
export class BrandHeaderInfoComponent {
  @Output() public newBrandEmmiter: EventEmitter<void> =
    new EventEmitter<void>();

  public newBrand() {
    this.newBrandEmmiter.emit();
  }
}
