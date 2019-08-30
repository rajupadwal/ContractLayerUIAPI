import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierbilloutstandingViewComponent } from './supplierbilloutstanding-view.component';

describe('SupplierbilloutstandingViewComponent', () => {
  let component: SupplierbilloutstandingViewComponent;
  let fixture: ComponentFixture<SupplierbilloutstandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierbilloutstandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierbilloutstandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
