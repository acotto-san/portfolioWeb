import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAcercaDeComponent } from './t-acerca-de.component';

describe('TAcercaDeComponent', () => {
  let component: TAcercaDeComponent;
  let fixture: ComponentFixture<TAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
