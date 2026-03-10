import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDataClientComponent } from './purchase-data-client.component';

describe('PurchaseDataClientComponent', () => {
  let component: PurchaseDataClientComponent;
  let fixture: ComponentFixture<PurchaseDataClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseDataClientComponent]
    });
    fixture = TestBed.createComponent(PurchaseDataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
