import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAgendaComponent } from './medico-agenda.component';

describe('MedicoAgendaComponent', () => {
  let component: MedicoAgendaComponent;
  let fixture: ComponentFixture<MedicoAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoAgendaComponent]
    });
    fixture = TestBed.createComponent(MedicoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
