import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemepaymentDetailsComponent } from './schemepayment-details.component';

describe('SchemepaymentDetailsComponent', () => {
  let component: SchemepaymentDetailsComponent;
  let fixture: ComponentFixture<SchemepaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemepaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemepaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
