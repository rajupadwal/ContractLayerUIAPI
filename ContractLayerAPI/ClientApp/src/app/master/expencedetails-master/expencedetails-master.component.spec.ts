import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencedetailsMasterComponent } from './expencedetails-master.component';

describe('ExpencedetailsMasterComponent', () => {
  let component: ExpencedetailsMasterComponent;
  let fixture: ComponentFixture<ExpencedetailsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencedetailsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencedetailsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
