import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsrangeMasterComponent } from './eggsrange-master.component';

describe('EggsrangeMasterComponent', () => {
  let component: EggsrangeMasterComponent;
  let fixture: ComponentFixture<EggsrangeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsrangeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsrangeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
