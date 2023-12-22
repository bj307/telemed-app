import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css'],
})
export class HomeUsersComponent implements OnInit {
  itsMedico = true;

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

  ngOnInit(): void {
    this.itsMedico = true;
    this.pacientes.push(this.paciente1);
    this.pacientes.push(this.paciente2);
    this.pacientes.push(this.paciente1);
    this.pacientes.push(this.paciente2);
    this.pacientes.push(this.paciente1);
  }

  pacientes: IPaciente[] = [];

  getSeverity(consultas: number) {
    return 'success';
  }
}

export interface IPaciente {
  nome: string;
  sintoma: string;
  genero: string;
  data: string;
  hora: string;
  consultas: number;
}
