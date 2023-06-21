import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSalesComponent } from './upload-sales.component';

describe('UploadSalesComponent', () => {
  let component: UploadSalesComponent;
  let fixture: ComponentFixture<UploadSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
