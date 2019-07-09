import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdescMasterComponent } from './productdesc-master.component';

describe('ProductdescMasterComponent', () => {
  let component: ProductdescMasterComponent;
  let fixture: ComponentFixture<ProductdescMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdescMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdescMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
