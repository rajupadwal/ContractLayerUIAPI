import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbilloutstandingViewComponent } from './customerbilloutstanding-view.component';

describe('CustomerbilloutstandingViewComponent', () => {
  let component: CustomerbilloutstandingViewComponent;
  let fixture: ComponentFixture<CustomerbilloutstandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerbilloutstandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbilloutstandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
