import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedStoresTableComponent } from './store-list-table.component';

describe('AffiliatedStoresTableComponent', () => {
  let component: AffiliatedStoresTableComponent;
  let fixture: ComponentFixture<AffiliatedStoresTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliatedStoresTableComponent],
    });
    fixture = TestBed.createComponent(AffiliatedStoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
