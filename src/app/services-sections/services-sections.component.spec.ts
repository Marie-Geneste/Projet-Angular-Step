import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionsComponent } from './services-sections.component';

describe('ServicesSectionsComponent', () => {
  let component: ServicesSectionsComponent;
  let fixture: ComponentFixture<ServicesSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSectionsComponent]
    });
    fixture = TestBed.createComponent(ServicesSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
