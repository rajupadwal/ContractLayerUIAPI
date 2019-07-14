import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencedetailsViewComponent } from './expencedetails-view.component';

describe('ExpencedetailsViewComponent', () => {
  let component: ExpencedetailsViewComponent;
  let fixture: ComponentFixture<ExpencedetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencedetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencedetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
