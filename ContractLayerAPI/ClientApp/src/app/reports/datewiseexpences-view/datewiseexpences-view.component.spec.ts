import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatewiseexpencesViewComponent } from './datewiseexpences-view.component';

describe('DatewiseexpencesViewComponent', () => {
  let component: DatewiseexpencesViewComponent;
  let fixture: ComponentFixture<DatewiseexpencesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatewiseexpencesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseexpencesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
