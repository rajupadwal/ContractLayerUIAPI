import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficieryViewComponent } from './beneficiery-view.component';

describe('BeneficieryViewComponent', () => {
  let component: BeneficieryViewComponent;
  let fixture: ComponentFixture<BeneficieryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficieryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficieryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
