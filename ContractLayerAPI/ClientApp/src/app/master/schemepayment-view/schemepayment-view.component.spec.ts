import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemepaymentViewComponent } from './schemepayment-view.component';

describe('SchemepaymentViewComponent', () => {
  let component: SchemepaymentViewComponent;
  let fixture: ComponentFixture<SchemepaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemepaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemepaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
