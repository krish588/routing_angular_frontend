import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhsidebarComponent } from './ihsidebar.component';

describe('IhsidebarComponent', () => {
  let component: IhsidebarComponent;
  let fixture: ComponentFixture<IhsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
