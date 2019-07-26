import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebillViewComponent } from './purchasebill-view.component';

describe('PurchasebillViewComponent', () => {
  let component: PurchasebillViewComponent;
  let fixture: ComponentFixture<PurchasebillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasebillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasebillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
