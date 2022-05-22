import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioDialogComponent } from './estudio-dialog.component';

describe('EstudioDialogComponent', () => {
  let component: EstudioDialogComponent;
  let fixture: ComponentFixture<EstudioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
