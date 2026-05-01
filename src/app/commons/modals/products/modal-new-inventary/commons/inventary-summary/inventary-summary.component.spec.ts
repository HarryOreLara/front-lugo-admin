import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarySummaryComponent } from './inventary-summary.component';

describe('InventarySummaryComponent', () => {
  let component: InventarySummaryComponent;
  let fixture: ComponentFixture<InventarySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarySummaryComponent]
    });
    fixture = TestBed.createComponent(InventarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
