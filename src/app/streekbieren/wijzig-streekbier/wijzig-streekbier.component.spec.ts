import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijzigStreekbierComponent } from './wijzig-streekbier.component';

describe('WijzigStreekbierComponent', () => {
  let component: WijzigStreekbierComponent;
  let fixture: ComponentFixture<WijzigStreekbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijzigStreekbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijzigStreekbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
