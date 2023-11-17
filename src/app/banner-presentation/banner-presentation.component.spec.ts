import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPresentationComponent } from './banner-presentation.component';

describe('BannerPresentationComponent', () => {
  let component: BannerPresentationComponent;
  let fixture: ComponentFixture<BannerPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPresentationComponent]
    });
    fixture = TestBed.createComponent(BannerPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
