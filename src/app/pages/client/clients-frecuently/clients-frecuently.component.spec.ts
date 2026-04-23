import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFrecuentlyComponent } from './clients-frecuently.component';

describe('ClientsFrecuentlyComponent', () => {
  let component: ClientsFrecuentlyComponent;
  let fixture: ComponentFixture<ClientsFrecuentlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsFrecuentlyComponent]
    });
    fixture = TestBed.createComponent(ClientsFrecuentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
