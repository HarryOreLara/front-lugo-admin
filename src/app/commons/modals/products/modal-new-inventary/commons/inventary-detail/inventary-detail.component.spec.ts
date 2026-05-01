import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaryDetailComponent } from './inventary-detail.component';

describe('InventaryDetailComponent', () => {
  let component: InventaryDetailComponent;
  let fixture: ComponentFixture<InventaryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventaryDetailComponent]
    });
    fixture = TestBed.createComponent(InventaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
