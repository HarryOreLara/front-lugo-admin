import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderInfoComponent } from './client-header-info.component';

describe('ClientHeaderInfoComponent', () => {
  let component: ClientHeaderInfoComponent;
  let fixture: ComponentFixture<ClientHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(ClientHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
