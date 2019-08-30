import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerledgerviewRoutingModule } from './customerledger.view.routing.module';

describe('CustomerledgerviewRoutingModule', () => {
  let component: CustomerledgerviewRoutingModule;
  let fixture: ComponentFixture<CustomerledgerviewRoutingModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerledgerviewRoutingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerledgerviewRoutingModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
