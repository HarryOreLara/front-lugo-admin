import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStockComponent } from './current-stock.component';

describe('CurrentStockComponent', () => {
  let component: CurrentStockComponent;
  let fixture: ComponentFixture<CurrentStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentStockComponent]
    });
    fixture = TestBed.createComponent(CurrentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
