import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  isPaciente = false;
  ngOnInit(): void {
    if (sessionStorage.getItem('paciente')) {
      this.isPaciente = true;
    } else {
      this.isPaciente = false;
    }
  }
}
