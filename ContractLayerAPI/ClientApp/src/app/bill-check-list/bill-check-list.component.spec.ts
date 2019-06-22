import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCheckListComponent } from './bill-check-list.component';

describe('BillCheckListComponent', () => {
  let component: BillCheckListComponent;
  let fixture: ComponentFixture<BillCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
