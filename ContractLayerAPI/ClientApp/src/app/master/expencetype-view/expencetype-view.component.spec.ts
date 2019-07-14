import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencetypeViewComponent } from './expencetype-view.component';

describe('ExpencetypeViewComponent', () => {
  let component: ExpencetypeViewComponent;
  let fixture: ComponentFixture<ExpencetypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencetypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencetypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
