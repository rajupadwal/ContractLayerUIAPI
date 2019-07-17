import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreceiptDetailsComponent } from './salesreceipt-details.component';

describe('SalesreceiptDetailsComponent', () => {
  let component: SalesreceiptDetailsComponent;
  let fixture: ComponentFixture<SalesreceiptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreceiptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreceiptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
