import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSkillsComponent } from './t-skills.component';

describe('TSkillsComponent', () => {
  let component: TSkillsComponent;
  let fixture: ComponentFixture<TSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
