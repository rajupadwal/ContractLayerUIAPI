import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcancelViewComponent } from './bookingcancel-view.component';

describe('BookingcancelViewComponent', () => {
  let component: BookingcancelViewComponent;
  let fixture: ComponentFixture<BookingcancelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingcancelViewComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcancelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
