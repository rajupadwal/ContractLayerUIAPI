import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsrangeViewComponent } from './eggsrange-view.component';

describe('EggsrangeViewComponent', () => {
  let component: EggsrangeViewComponent;
  let fixture: ComponentFixture<EggsrangeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsrangeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsrangeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
