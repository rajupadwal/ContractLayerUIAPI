import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerchickeggsbillDetailComponent } from './farmerchickeggsbill-detail.component';

describe('FarmerchickeggsbillDetailComponent', () => {
  let component: FarmerchickeggsbillDetailComponent;
  let fixture: ComponentFixture<FarmerchickeggsbillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerchickeggsbillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerchickeggsbillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
