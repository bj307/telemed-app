import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  ano: number;
  mes: number;

  mesesDisponiveis = [
    { nome: 'Janeiro', valor: 1 },
    { nome: 'Fevereiro', valor: 2 },
    { nome: 'Março', valor: 3 },
    { nome: 'Abril', valor: 4 },
    { nome: 'Maio', valor: 5 },
    { nome: 'Junho', valor: 6 },
    { nome: 'Julho', valor: 7 },
    { nome: 'Agosto', valor: 8 },
    { nome: 'Setembro', valor: 9 },
    { nome: 'Outubro', valor: 10 },
    { nome: 'Novembro', valor: 11 },
    { nome: 'Dezembro', valor: 12 },
  ];

  anosDisponiveis: number[] = [];
  semanas: any[] = [];

  constructor() {
    this.ano = new Date().getFullYear();
    this.mes = new Date().getMonth() + 1;

    for (let i = 1900; i <= 2099; i++) {
      this.anosDisponiveis.push(i);
    }

    this.gerarCalendario();
  }

  ngOnInit(): void {
    this.gerarCalendario();
  }

  mudarAno() {
    this.gerarCalendario();
  }

  mudarMes() {
    this.gerarCalendario();
  }

  // gerarCalendario() {
  //   const diasMes = new Date(this.ano, this.mes, 0).getDate();
  //   const primeiroDiaMes = new Date(this.ano, this.mes - 1, 1).getDay();
  //   const totalDias = diasMes + primeiroDiaMes;
  //   let semanas = [];
  //   let diasDaSemana = [];

  //   for (let i = 0; i < totalDias; i++) {
  //     const dia = new Date(this.ano, this.mes - 1, i + 1 - primeiroDiaMes);
  //     const diaData = dia.getDate();
  //     const diaMes = dia.getMonth() + 1;
  //     const diaAno = dia.getFullYear();
  //     const finalDeSemana = dia.getDay() === 0 || dia.getDay() === 6;
  //     const mesAnteriorOuPosterior = diaMes !== this.mes;

  //     diasDaSemana.push({
  //       dia: {
  //         data: diaData,
  //         mes: diaMes,
  //         finalDeSemana: finalDeSemana,
  //         mesAno: this.ano,
  //         mesAnteriorOuPosterior: mesAnteriorOuPosterior,
  //       },
  //     });

  //     if (diasDaSemana.length % 7 === 0 || i === totalDias - 1) {
  //       semanas.push(diasDaSemana);
  //       diasDaSemana = [];
  //     }
  //   }

  //   this.semanas = semanas;
  // }

  // ...

  gerarCalendario() {
    const diasMes = new Date(this.ano, this.mes, 0).getDate();
    const primeiroDiaMes = new Date(this.ano, this.mes - 1, 1).getDay();
    const totalDias = diasMes + primeiroDiaMes;
    let semanas = [];
    let diasDaSemana = [];

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    for (let i = 0; i < totalDias; i++) {
      const dia = new Date(this.ano, this.mes - 1, i + 1 - primeiroDiaMes);
      const diaData = dia.getDate();
      const diaMes = dia.getMonth() + 1;
      const diaAno = dia.getFullYear();
      const finalDeSemana = dia.getDay() === 0 || dia.getDay() === 6;
      const mesAnteriorOuPosterior =
        diaMes !== this.mes || (diaMes === mesAtual && diaData === diaAtual);

      diasDaSemana.push({
        dia: {
          data: diaData,
          mes: diaMes,
          finalDeSemana: finalDeSemana,
          mesAno: this.ano,
          mesAnteriorOuPosterior: mesAnteriorOuPosterior,
          diaAtual:
            diaMes === mesAtual && diaData === diaAtual && anoAtual === diaAno,
        },
      });

      if (diasDaSemana.length % 7 === 0 || i === totalDias - 1) {
        semanas.push(diasDaSemana);
        diasDaSemana = [];
      }
    }

    this.semanas = semanas;
  }
}
