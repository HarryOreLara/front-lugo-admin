import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsFinanciesComponent } from './reports-financies.component';

describe('ReportsFinanciesComponent', () => {
  let component: ReportsFinanciesComponent;
  let fixture: ComponentFixture<ReportsFinanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsFinanciesComponent]
    });
    fixture = TestBed.createComponent(ReportsFinanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
