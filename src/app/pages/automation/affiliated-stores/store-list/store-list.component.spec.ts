import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedStoresComponent } from './store-list.component';

describe('AffiliatedStoresComponent', () => {
  let component: AffiliatedStoresComponent;
  let fixture: ComponentFixture<AffiliatedStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliatedStoresComponent],
    });
    fixture = TestBed.createComponent(AffiliatedStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
