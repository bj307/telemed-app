import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUserSessionComponent } from './forms-user-session.component';

describe('FormsUserSessionComponent', () => {
  let component: FormsUserSessionComponent;
  let fixture: ComponentFixture<FormsUserSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsUserSessionComponent]
    });
    fixture = TestBed.createComponent(FormsUserSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
