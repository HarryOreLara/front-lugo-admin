import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewStoreComponent } from './modal-new-store.component';

describe('ModalNewStoreComponent', () => {
  let component: ModalNewStoreComponent;
  let fixture: ComponentFixture<ModalNewStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewStoreComponent]
    });
    fixture = TestBed.createComponent(ModalNewStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
