import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbookingoutstandingViewComponent } from './customerbookingoutstanding-view.component';

describe('CustomerbookingoutstandingViewComponent', () => {
  let component: CustomerbookingoutstandingViewComponent;
  let fixture: ComponentFixture<CustomerbookingoutstandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerbookingoutstandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbookingoutstandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
