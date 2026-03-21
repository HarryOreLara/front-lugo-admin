import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHeaderInfoComponent } from './purchase-header-info.component';

describe('PurchaseHeaderInfoComponent', () => {
  let component: PurchaseHeaderInfoComponent;
  let fixture: ComponentFixture<PurchaseHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(PurchaseHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
