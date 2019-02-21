import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwStreekbierComponent } from './nieuw-streekbier.component';

describe('NieuwStreekbierComponent', () => {
  let component: NieuwStreekbierComponent;
  let fixture: ComponentFixture<NieuwStreekbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwStreekbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwStreekbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
