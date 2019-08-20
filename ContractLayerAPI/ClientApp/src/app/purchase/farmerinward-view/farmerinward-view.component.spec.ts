import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerinwardViewComponent } from './farmerinward-view.component';

describe('FarmerinwardViewComponent', () => {
  let component: FarmerinwardViewComponent;
  let fixture: ComponentFixture<FarmerinwardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerinwardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerinwardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
