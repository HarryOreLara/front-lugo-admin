import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewOwnerComponent } from './modal-new-owner.component';

describe('ModalNewOwnerComponent', () => {
  let component: ModalNewOwnerComponent;
  let fixture: ComponentFixture<ModalNewOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewOwnerComponent]
    });
    fixture = TestBed.createComponent(ModalNewOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
