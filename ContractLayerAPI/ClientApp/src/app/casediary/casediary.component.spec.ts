import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasediaryComponent } from './casediary.component';

describe('CasediaryComponent', () => {
  let component: CasediaryComponent;
  let fixture: ComponentFixture<CasediaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasediaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
