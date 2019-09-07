import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatewisepurchasereturnViewComponent } from './datewisepurchasereturn-view.component';

describe('DatewisepurchasereturnViewComponent', () => {
  let component: DatewisepurchasereturnViewComponent;
  let fixture: ComponentFixture<DatewisepurchasereturnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatewisepurchasereturnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewisepurchasereturnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
