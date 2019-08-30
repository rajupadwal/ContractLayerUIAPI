import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierledgerViewComponent } from './supplierledger-view.component';

describe('SupplierledgerViewComponent', () => {
  let component: SupplierledgerViewComponent;
  let fixture: ComponentFixture<SupplierledgerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierledgerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierledgerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
