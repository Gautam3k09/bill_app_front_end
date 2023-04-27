import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInventoryModalComponent } from './company-inventory-modal.component';

describe('CompanyInventoryModalComponent', () => {
  let component: CompanyInventoryModalComponent;
  let fixture: ComponentFixture<CompanyInventoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInventoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInventoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
