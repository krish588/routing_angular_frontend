import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingPageIdeaCardComponent } from './main-landing-page-idea-card.component';

describe('MainLandingPageIdeaCardComponent', () => {
  let component: MainLandingPageIdeaCardComponent;
  let fixture: ComponentFixture<MainLandingPageIdeaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLandingPageIdeaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandingPageIdeaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
