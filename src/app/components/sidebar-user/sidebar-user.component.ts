import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css'],
})
export class SidebarUserComponent implements OnInit {
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
  widthItem = '245px';
  colorText = '#0c1e35';
  backgroundColor = 'white';

  menu = {
    inicio: 'none',
    medico: 'none',
    interprete: 'none',
    paciente: 'none',
    consulta: 'none',
  };

  dropSide() {
    if (this.open) {
      this.colorText = 'white';
      this.backgroundColor = '#0d6efd';
      this.open = false;
      this.widthItem = '50px';
      this.width = '70px';
      this.icon = 'chevron_right';
      this.marginBtn = '40px';
      this.title = '';
      this.arrow = 'none';
    } else {
      this.colorText = '#0d6efd';
      this.backgroundColor = 'white';
      this.open = true;
      this.widthItem = '245px';
      this.width = '300px';
      this.icon = 'chevron_left';
      this.marginBtn = '270px';
      this.title = 'Administrador';
      this.arrow = 'block';
    }
  }

  subInicio() {}

  consoles() {
    console.log('teste');
  }

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
