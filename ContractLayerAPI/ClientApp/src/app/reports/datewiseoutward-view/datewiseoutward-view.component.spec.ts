import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatewiseoutwardViewComponent } from './datewiseoutward-view.component';

describe('DatewiseoutwardViewComponent', () => {
  let component: DatewiseoutwardViewComponent;
  let fixture: ComponentFixture<DatewiseoutwardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatewiseoutwardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseoutwardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
