import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPacientesComponent } from './medico-pacientes.component';

describe('MedicoPacientesComponent', () => {
  let component: MedicoPacientesComponent;
  let fixture: ComponentFixture<MedicoPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoPacientesComponent]
    });
    fixture = TestBed.createComponent(MedicoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
