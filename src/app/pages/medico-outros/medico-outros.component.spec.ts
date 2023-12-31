import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoOutrosComponent } from './medico-outros.component';

describe('MedicoOutrosComponent', () => {
  let component: MedicoOutrosComponent;
  let fixture: ComponentFixture<MedicoOutrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoOutrosComponent]
    });
    fixture = TestBed.createComponent(MedicoOutrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
