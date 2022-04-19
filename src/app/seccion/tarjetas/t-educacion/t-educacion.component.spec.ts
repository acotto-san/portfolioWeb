import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEducacionComponent } from './t-educacion.component';

describe('TEducacionComponent', () => {
  let component: TEducacionComponent;
  let fixture: ComponentFixture<TEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
