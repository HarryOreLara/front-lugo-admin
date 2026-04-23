import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantsComponent } from './comprobants.component';

describe('ComprobantsComponent', () => {
  let component: ComprobantsComponent;
  let fixture: ComponentFixture<ComprobantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprobantsComponent]
    });
    fixture = TestBed.createComponent(ComprobantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
