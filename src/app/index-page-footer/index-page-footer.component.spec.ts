import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageFooterComponent } from './index-page-footer.component';

describe('IndexPageFooterComponent', () => {
  let component: IndexPageFooterComponent;
  let fixture: ComponentFixture<IndexPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
