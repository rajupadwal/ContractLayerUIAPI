import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebillreturnViewComponent } from './purchasebillreturn-view.component';

describe('PurchasebillreturnViewComponent', () => {
  let component: PurchasebillreturnViewComponent;
  let fixture: ComponentFixture<PurchasebillreturnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasebillreturnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasebillreturnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
