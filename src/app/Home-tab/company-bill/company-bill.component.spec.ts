import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBillComponent } from './company-bill.component';

describe('CompanyBillComponent', () => {
  let component: CompanyBillComponent;
  let fixture: ComponentFixture<CompanyBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
