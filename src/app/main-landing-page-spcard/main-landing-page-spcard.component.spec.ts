import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingPageSPCardComponent } from './main-landing-page-spcard.component';

describe('MainLandingPageSPCardComponent', () => {
  let component: MainLandingPageSPCardComponent;
  let fixture: ComponentFixture<MainLandingPageSPCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLandingPageSPCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandingPageSPCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
