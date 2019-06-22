import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyProgressReportComponent } from './add-daily-progress-report.component';

describe('AddDailyProgressReportComponent', () => {
  let component: AddDailyProgressReportComponent;
  let fixture: ComponentFixture<AddDailyProgressReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyProgressReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyProgressReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
