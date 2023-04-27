import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMachinesModalComponent } from './company-machines-modal.component';

describe('CompanyMachinesModalComponent', () => {
  let component: CompanyMachinesModalComponent;
  let fixture: ComponentFixture<CompanyMachinesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMachinesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMachinesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
