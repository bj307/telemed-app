import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLoginComponent } from './forms-login.component';

describe('FormsLoginComponent', () => {
  let component: FormsLoginComponent;
  let fixture: ComponentFixture<FormsLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLoginComponent]
    });
    fixture = TestBed.createComponent(FormsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
