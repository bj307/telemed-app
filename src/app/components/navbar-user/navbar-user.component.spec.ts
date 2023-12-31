import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserComponent } from './navbar-user.component';

describe('NavbarUserComponent', () => {
  let component: NavbarUserComponent;
  let fixture: ComponentFixture<NavbarUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarUserComponent]
    });
    fixture = TestBed.createComponent(NavbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
