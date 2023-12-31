import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-consultas',
  templateUrl: './medico-consultas.component.html',
  styleUrls: ['./medico-consultas.component.css'],
})
export class MedicoConsultasComponent implements OnInit {
  pacientes: IPaciente[] = [];
  inicial = 0;
  final = 4;
  bgColorBtnR = '#0d6efd';
  bgColorBtnL = '#0d6efd';

  showPacientes: IPaciente[] = [];

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
    this.mostraPacientes();
  }

  getSeverity(consultas: number) {
    return 'success';
  }

  mostraPacientes() {
    this.showPacientes = this.pacientes.slice(this.inicial, this.final);
    if (!(this.final < this.pacientes.length)) {
      this.bgColorBtnR = '#a7b7cf';
      this.bgColorBtnL = '#0d6efd';
    } else if (!(this.inicial > 0)) {
      this.bgColorBtnL = '#a7b7cf';
      this.bgColorBtnR = '#0d6efd';
    } else {
      this.bgColorBtnR = '#0d6efd';
      this.bgColorBtnL = '#0d6efd';
    }
  }

  avancar() {
    if (this.final < this.pacientes.length) {
      this.inicial += 1;
      this.final += 1;
      this.mostraPacientes();
    }
  }

  voltar() {
    if (this.inicial > 0) {
      this.inicial -= 1;
      this.final -= 1;
      this.mostraPacientes();
    }
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
