import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputStockComponent } from './output-stock.component';

describe('OutputStockComponent', () => {
  let component: OutputStockComponent;
  let fixture: ComponentFixture<OutputStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputStockComponent]
    });
    fixture = TestBed.createComponent(OutputStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
