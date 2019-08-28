import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaServiceComponent } from './idea-service.component';

describe('IdeaServiceComponent', () => {
  let component: IdeaServiceComponent;
  let fixture: ComponentFixture<IdeaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
