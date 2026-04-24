import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHeaderInfoComponent } from './employee-header-info.component';

describe('EmployeeHeaderInfoComponent', () => {
  let component: EmployeeHeaderInfoComponent;
  let fixture: ComponentFixture<EmployeeHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(EmployeeHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
