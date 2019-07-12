import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcancelDetailsComponent } from './bookingcancel-details.component';

describe('BookingcancelDetailsComponent', () => {
  let component: BookingcancelDetailsComponent;
  let fixture: ComponentFixture<BookingcancelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingcancelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcancelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
