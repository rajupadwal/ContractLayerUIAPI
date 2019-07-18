import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepaymentViewComponent } from './purchasepayment-view.component';

describe('PurchasepaymentViewComponent', () => {
  let component: PurchasepaymentViewComponent;
  let fixture: ComponentFixture<PurchasepaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
