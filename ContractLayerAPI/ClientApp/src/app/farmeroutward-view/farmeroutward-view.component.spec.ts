import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmeroutwardViewComponent } from './farmeroutward-view.component';

describe('FarmeroutwardViewComponent', () => {
  let component: FarmeroutwardViewComponent;
  let fixture: ComponentFixture<FarmeroutwardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmeroutwardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmeroutwardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
