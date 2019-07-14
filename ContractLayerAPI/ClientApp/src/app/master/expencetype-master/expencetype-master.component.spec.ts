import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencetypeMasterComponent } from './expencetype-master.component';

describe('ExpencetypeMasterComponent', () => {
  let component: ExpencetypeMasterComponent;
  let fixture: ComponentFixture<ExpencetypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencetypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencetypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
