import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcasteViewComponent } from './subcaste-view.component';

describe('SubcasteViewComponent', () => {
  let component: SubcasteViewComponent;
  let fixture: ComponentFixture<SubcasteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcasteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcasteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
