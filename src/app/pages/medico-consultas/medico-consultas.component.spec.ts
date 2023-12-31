import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoConsultasComponent } from './medico-consultas.component';

describe('MedicoConsultasComponent', () => {
  let component: MedicoConsultasComponent;
  let fixture: ComponentFixture<MedicoConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoConsultasComponent]
    });
    fixture = TestBed.createComponent(MedicoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
