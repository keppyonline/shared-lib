import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLibComponent } from './footer-lib.component';

describe('FooterLibComponent', () => {
  let component: FooterLibComponent;
  let fixture: ComponentFixture<FooterLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
