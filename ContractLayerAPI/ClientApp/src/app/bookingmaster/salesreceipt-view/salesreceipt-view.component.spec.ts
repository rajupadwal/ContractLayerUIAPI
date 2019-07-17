import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreceiptViewComponent } from './salesreceipt-view.component';

describe('SalesreceiptViewComponent', () => {
  let component: SalesreceiptViewComponent;
  let fixture: ComponentFixture<SalesreceiptViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreceiptViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreceiptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
