import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstStreekbierenComponent } from './lijst-streekbieren.component';

describe('LijstStreekbierenComponent', () => {
  let component: LijstStreekbierenComponent;
  let fixture: ComponentFixture<LijstStreekbierenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LijstStreekbierenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LijstStreekbierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
