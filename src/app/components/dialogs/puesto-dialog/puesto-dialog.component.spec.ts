import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoDialogComponent } from './puesto-dialog.component';

describe('PuestoDialogComponent', () => {
  let component: PuestoDialogComponent;
  let fixture: ComponentFixture<PuestoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
