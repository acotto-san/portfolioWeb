import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TExperienciaComponent } from './t-experiencia.component';

describe('TExperienciaComponent', () => {
  let component: TExperienciaComponent;
  let fixture: ComponentFixture<TExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
