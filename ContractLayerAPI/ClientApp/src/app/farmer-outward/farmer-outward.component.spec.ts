import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerOutwardComponent } from './farmer-outward.component';

describe('FarmerOutwardComponent', () => {
  let component: FarmerOutwardComponent;
  let fixture: ComponentFixture<FarmerOutwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerOutwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
