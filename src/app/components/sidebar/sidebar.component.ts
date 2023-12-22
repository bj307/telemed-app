import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    this.open = true;
  }

  title = 'Administrador';
  open = true;
  width = '300px';
  icon = 'chevron_left';
  marginBtn = '270px';
  transition = 'width 1s';
  transitionMargin = 'margin-left 1s';
  transitionDisplay = 'display linear 2s';
  arrow = 'block';

  menu = {
    inicio: 'none',
    medico: 'none',
    interprete: 'none',
    paciente: 'none',
    consulta: 'none',
  };

  dropSide() {
    if (this.open) {
      this.open = false;
      this.width = '70px';
      this.icon = 'chevron_right';
      this.marginBtn = '40px';
      this.title = '';
      this.arrow = 'none';
    } else {
      this.open = true;
      this.width = '300px';
      this.icon = 'chevron_left';
      this.marginBtn = '270px';
      this.title = 'Administrador';
      this.arrow = 'block';
    }
  }

  subInicio() {}

  subMedico() {
    if (this.menu.medico === 'none') {
      this.menu.medico = 'block';
    } else {
      this.menu.medico = 'none';
    }
  }

  subInterprete() {
    if (this.menu.interprete === 'none') {
      this.menu.interprete = 'block';
    } else {
      this.menu.interprete = 'none';
    }
  }

  subPaciente() {
    if (this.menu.paciente === 'none') {
      this.menu.paciente = 'block';
    } else {
      this.menu.paciente = 'none';
    }
  }

  subConsulta() {
    if (this.menu.consulta === 'none') {
      this.menu.consulta = 'block';
    } else {
      this.menu.consulta = 'none';
    }
  }
}
