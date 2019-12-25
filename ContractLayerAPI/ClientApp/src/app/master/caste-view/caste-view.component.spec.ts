import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CasteViewComponent } from './caste-view.component';


describe('CasteViewComponent', () => {
  let component: CasteViewComponent;
  let fixture: ComponentFixture<CasteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
