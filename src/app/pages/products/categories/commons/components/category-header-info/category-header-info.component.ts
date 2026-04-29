import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-header-info-ui',
  templateUrl: './category-header-info.component.html',
  styleUrls: ['./category-header-info.component.css'],
})
export class CategoryHeaderInfoComponent implements OnInit {
  @Output() public newCategoryEmmiter: EventEmitter<void> =
    new EventEmitter<void>();

  public ngOnInit() {}

  public newCategory() {
    this.newCategoryEmmiter.emit();
  }
}
