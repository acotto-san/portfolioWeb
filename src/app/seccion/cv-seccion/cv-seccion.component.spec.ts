import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSeccionComponent } from './cv-seccion.component';

describe('CvSeccionComponent', () => {
  let component: CvSeccionComponent;
  let fixture: ComponentFixture<CvSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
