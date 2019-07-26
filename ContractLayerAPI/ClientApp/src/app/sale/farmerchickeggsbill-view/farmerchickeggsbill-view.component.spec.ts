import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerchickeggsbillViewComponent } from './farmerchickeggsbill-view.component';

describe('FarmerchickeggsbillViewComponent', () => {
  let component: FarmerchickeggsbillViewComponent;
  let fixture: ComponentFixture<FarmerchickeggsbillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerchickeggsbillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerchickeggsbillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
