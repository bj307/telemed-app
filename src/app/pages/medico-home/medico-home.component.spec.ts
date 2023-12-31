import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHomeComponent } from './medico-home.component';

describe('MedicoHomeComponent', () => {
  let component: MedicoHomeComponent;
  let fixture: ComponentFixture<MedicoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoHomeComponent]
    });
    fixture = TestBed.createComponent(MedicoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
