import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock2Component } from './mock2.component';

describe('Mock2Component', () => {
  let component: Mock2Component;
  let fixture: ComponentFixture<Mock2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mock2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
