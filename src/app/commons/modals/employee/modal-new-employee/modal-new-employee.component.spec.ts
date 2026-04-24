import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewEmployeeComponent } from './modal-new-employee.component';

describe('ModalNewEmployeeComponent', () => {
  let component: ModalNewEmployeeComponent;
  let fixture: ComponentFixture<ModalNewEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalNewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
