import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBillReturnComponent } from './purchase-billreturn.component';

describe('PurchaseBillReturnComponent', () => {
  let component: PurchaseBillReturnComponent;
  let fixture: ComponentFixture<PurchaseBillReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseBillReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseBillReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
