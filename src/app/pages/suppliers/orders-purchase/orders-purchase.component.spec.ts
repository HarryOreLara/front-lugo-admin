import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPurchaseComponent } from './orders-purchase.component';

describe('OrdersPurchaseComponent', () => {
  let component: OrdersPurchaseComponent;
  let fixture: ComponentFixture<OrdersPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersPurchaseComponent]
    });
    fixture = TestBed.createComponent(OrdersPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
