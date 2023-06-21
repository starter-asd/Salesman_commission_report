import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanPopupComponent } from './salesman-popup.component';

describe('SalesmanPopupComponent', () => {
  let component: SalesmanPopupComponent;
  let fixture: ComponentFixture<SalesmanPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesmanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
