import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficieryDetailsComponent } from './beneficiery-details.component';

describe('BeneficieryDetailsComponent', () => {
  let component: BeneficieryDetailsComponent;
  let fixture: ComponentFixture<BeneficieryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficieryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficieryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
