import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDataProductComponent } from './purchase-data-product.component';

describe('PurchaseDataProductComponent', () => {
  let component: PurchaseDataProductComponent;
  let fixture: ComponentFixture<PurchaseDataProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseDataProductComponent]
    });
    fixture = TestBed.createComponent(PurchaseDataProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
