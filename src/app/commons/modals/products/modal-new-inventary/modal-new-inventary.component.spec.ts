import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewInventaryComponent } from './modal-new-inventary.component';

describe('ModalNewInventaryComponent', () => {
  let component: ModalNewInventaryComponent;
  let fixture: ComponentFixture<ModalNewInventaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewInventaryComponent]
    });
    fixture = TestBed.createComponent(ModalNewInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
