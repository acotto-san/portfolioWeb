import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockcompComponent } from './mockcomp.component';

describe('MockcompComponent', () => {
  let component: MockcompComponent;
  let fixture: ComponentFixture<MockcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
