import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcasteMasterComponent } from './subcaste-master.component';

describe('SubcasteMasterComponent', () => {
  let component: SubcasteMasterComponent;
  let fixture: ComponentFixture<SubcasteMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcasteMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcasteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
