import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeadvanceDetailsComponent } from './employeeadvance-details.component';

describe('EmployeeadvanceDetailsComponent', () => {
  let component: EmployeeadvanceDetailsComponent;
  let fixture: ComponentFixture<EmployeeadvanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeadvanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeadvanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
