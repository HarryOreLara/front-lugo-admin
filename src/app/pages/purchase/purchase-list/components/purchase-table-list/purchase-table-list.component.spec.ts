import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTableListComponent } from './purchase-table-list.component';

describe('PurchaseTableListComponent', () => {
  let component: PurchaseTableListComponent;
  let fixture: ComponentFixture<PurchaseTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseTableListComponent]
    });
    fixture = TestBed.createComponent(PurchaseTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
