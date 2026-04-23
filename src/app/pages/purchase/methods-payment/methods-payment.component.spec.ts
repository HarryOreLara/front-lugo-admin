import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsPaymentComponent } from './methods-payment.component';

describe('MethodsPaymentComponent', () => {
  let component: MethodsPaymentComponent;
  let fixture: ComponentFixture<MethodsPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodsPaymentComponent]
    });
    fixture = TestBed.createComponent(MethodsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
