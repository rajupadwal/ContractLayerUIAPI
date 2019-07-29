import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereturnReceiptViewComponent } from './purchasereturnreceipt-view.component';

describe('PurchasereturnReceiptViewComponent', () => {
  let component: PurchasereturnReceiptViewComponent;
  let fixture: ComponentFixture<PurchasereturnReceiptViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasereturnReceiptViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasereturnReceiptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
