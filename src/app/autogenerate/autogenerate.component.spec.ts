import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutogenerateComponent } from './autogenerate.component';

describe('AutogenerateComponent', () => {
  let component: AutogenerateComponent;
  let fixture: ComponentFixture<AutogenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutogenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutogenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
