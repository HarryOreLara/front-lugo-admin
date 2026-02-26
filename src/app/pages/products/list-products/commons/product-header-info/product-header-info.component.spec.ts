import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeaderInfoComponent } from './product-header-info.component';

describe('ProductHeaderInfoComponent', () => {
  let component: ProductHeaderInfoComponent;
  let fixture: ComponentFixture<ProductHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(ProductHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
