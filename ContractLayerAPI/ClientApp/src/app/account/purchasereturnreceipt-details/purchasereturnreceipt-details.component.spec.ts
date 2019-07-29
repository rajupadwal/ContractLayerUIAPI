import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereturnreceiptDetailsComponent } from './purchasereturnreceipt-details.component';

describe('PurchasereturnreceiptDetailsComponent', () => {
  let component: PurchasereturnreceiptDetailsComponent;
  let fixture: ComponentFixture<PurchasereturnreceiptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasereturnreceiptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasereturnreceiptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
