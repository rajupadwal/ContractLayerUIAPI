import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepaymentDetailsComponent } from './purchasepayment-details.component';

describe('PurchasepaymentDetailsComponent', () => {
  let component: PurchasepaymentDetailsComponent;
  let fixture: ComponentFixture<PurchasepaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
