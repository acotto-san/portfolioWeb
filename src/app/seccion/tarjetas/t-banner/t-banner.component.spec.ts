import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBannerComponent } from './t-banner.component';

describe('TBannerComponent', () => {
  let component: TBannerComponent;
  let fixture: ComponentFixture<TBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
