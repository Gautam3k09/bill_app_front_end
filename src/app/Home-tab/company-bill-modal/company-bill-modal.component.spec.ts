import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBillModalComponent } from './company-bill-modal.component';

describe('CompanyBillModalComponent', () => {
  let component: CompanyBillModalComponent;
  let fixture: ComponentFixture<CompanyBillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBillModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
