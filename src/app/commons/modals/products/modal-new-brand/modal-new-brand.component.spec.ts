import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewBrandComponent } from './modal-new-brand.component';

describe('ModalNewBrandComponent', () => {
  let component: ModalNewBrandComponent;
  let fixture: ComponentFixture<ModalNewBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewBrandComponent]
    });
    fixture = TestBed.createComponent(ModalNewBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
