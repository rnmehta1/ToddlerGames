import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TapnpopComponent } from './tapnpop.component';

describe('TapnpopComponent', () => {
  let component: TapnpopComponent;
  let fixture: ComponentFixture<TapnpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapnpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapnpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
