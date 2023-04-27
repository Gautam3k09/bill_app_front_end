import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMachinesComponent } from './company-machines.component';

describe('CompanyMachinesComponent', () => {
  let component: CompanyMachinesComponent;
  let fixture: ComponentFixture<CompanyMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
