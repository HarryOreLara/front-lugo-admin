import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedStoresHeaderComponent } from './affiliated-stores-header.component';

describe('AffiliatedStoresHeaderComponent', () => {
  let component: AffiliatedStoresHeaderComponent;
  let fixture: ComponentFixture<AffiliatedStoresHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliatedStoresHeaderComponent]
    });
    fixture = TestBed.createComponent(AffiliatedStoresHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
