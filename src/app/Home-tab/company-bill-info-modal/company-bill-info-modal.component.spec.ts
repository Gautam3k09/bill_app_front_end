import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBillInfoModalComponent } from './company-bill-info-modal.component';

describe('CompanyBillInfoModalComponent', () => {
  let component: CompanyBillInfoModalComponent;
  let fixture: ComponentFixture<CompanyBillInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBillInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBillInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
