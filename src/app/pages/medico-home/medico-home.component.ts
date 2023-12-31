import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-home',
  templateUrl: './medico-home.component.html',
  styleUrls: ['./medico-home.component.css'],
})
export class MedicoHomeComponent implements OnInit {
  pacientes: IPaciente[] = [];
  ngOnInit(): void {
    this.pacientes.push(
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2,
      this.paciente1,
      this.paciente2
    );
  }

  getSeverity(consultas: number) {
    return 'success';
  }

  // Pacientes exemplo
  paciente1: IPaciente = {
    nome: 'João Pagani',
    sintoma: 'Sem GH',
    genero: 'Homem?',
    data: '22/12/2023',
    hora: '21:00',
    consultas: 16,
  };
  paciente2: IPaciente = {
    nome: 'Kaio Resende',
    sintoma: 'Sem Trembo',
    genero: 'Sheipado',
    data: '22/12/2023',
    hora: '22:00',
    consultas: 171,
  };
}

// Interface exemplo
export interface IPaciente {
  nome: string;
  sintoma: string;
  genero: string;
  data: string;
  hora: string;
  consultas: number;
}
