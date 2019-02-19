import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreekbierComponent } from './streekbier.component';

describe('StreekbierComponent', () => {
  let component: StreekbierComponent;
  let fixture: ComponentFixture<StreekbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreekbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreekbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
