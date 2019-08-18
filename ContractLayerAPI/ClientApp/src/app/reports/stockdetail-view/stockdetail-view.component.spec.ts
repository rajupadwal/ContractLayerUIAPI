import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdetailViewComponent } from './stockdetail-view.component';

describe('StockdetailViewComponent', () => {
  let component: StockdetailViewComponent;
  let fixture: ComponentFixture<StockdetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockdetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockdetailViewComponent  );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
