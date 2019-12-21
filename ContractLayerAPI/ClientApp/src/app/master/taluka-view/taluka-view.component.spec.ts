import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaViewComponent } from './taluka-view.component';

describe('TalukaViewComponent', () => {
  let component: TalukaViewComponent;
  let fixture: ComponentFixture<TalukaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
