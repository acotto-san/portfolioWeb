import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TExperienciaModalFormComponent } from './t-experiencia-modal-form.component';

describe('TExperienciaModalFormComponent', () => {
  let component: TExperienciaModalFormComponent;
  let fixture: ComponentFixture<TExperienciaModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TExperienciaModalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TExperienciaModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
