import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouwerijComponent } from './brouwerij.component';

describe('BrouwerijComponent', () => {
  let component: BrouwerijComponent;
  let fixture: ComponentFixture<BrouwerijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrouwerijComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouwerijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
