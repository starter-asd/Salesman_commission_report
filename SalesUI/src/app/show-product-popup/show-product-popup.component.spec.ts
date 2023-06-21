import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductPopupComponent } from './show-product-popup.component';

describe('ShowProductPopupComponent', () => {
  let component: ShowProductPopupComponent;
  let fixture: ComponentFixture<ShowProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
