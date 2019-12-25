import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtypeMasterComponent } from './subtype-master.component';

describe('SubtypeMasterComponent', () => {
  let component: SubtypeMasterComponent;
  let fixture: ComponentFixture<SubtypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
