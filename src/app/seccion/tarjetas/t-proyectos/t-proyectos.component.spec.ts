import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TProyectosComponent } from './t-proyectos.component';

describe('TProyectosComponent', () => {
  let component: TProyectosComponent;
  let fixture: ComponentFixture<TProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
