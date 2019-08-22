import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerInwardComponent } from './farmer-inward.component';

describe('FarmerInwardComponent', () => {
  let component: FarmerInwardComponent;
  let fixture: ComponentFixture<FarmerInwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerInwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
