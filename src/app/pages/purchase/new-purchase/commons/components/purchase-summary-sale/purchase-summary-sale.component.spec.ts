import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSummarySaleComponent } from './purchase-summary-sale.component';

describe('PurchaseSummarySaleComponent', () => {
  let component: PurchaseSummarySaleComponent;
  let fixture: ComponentFixture<PurchaseSummarySaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseSummarySaleComponent]
    });
    fixture = TestBed.createComponent(PurchaseSummarySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
