import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInventoryComponent } from './company-inventory.component';

describe('CompanyInventoryComponent', () => {
  let component: CompanyInventoryComponent;
  let fixture: ComponentFixture<CompanyInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
