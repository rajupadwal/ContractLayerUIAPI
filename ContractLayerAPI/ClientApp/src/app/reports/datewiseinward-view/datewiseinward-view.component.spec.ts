import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatewiseinwardViewComponent } from './datewiseinward-view.component';

describe('DatewiseinwardViewComponent', () => {
  let component: DatewiseinwardViewComponent;
  let fixture: ComponentFixture<DatewiseinwardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatewiseinwardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseinwardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
