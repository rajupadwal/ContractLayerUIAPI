import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeadvanceViewComponent } from './employeeadvance-view.component';

describe('EmployeeadvanceViewComponent', () => {
  let component: EmployeeadvanceViewComponent;
  let fixture: ComponentFixture<EmployeeadvanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeadvanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeadvanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
