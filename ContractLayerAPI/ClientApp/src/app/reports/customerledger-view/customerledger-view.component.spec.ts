import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerledgerViewComponent } from './customerledger-view.component';

describe('CustomerledgerViewComponent', () => {
  let component: CustomerledgerViewComponent;
  let fixture: ComponentFixture<CustomerledgerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerledgerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerledgerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
