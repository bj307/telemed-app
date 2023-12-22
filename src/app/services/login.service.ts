import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginAdm } from '../interfaces/ILoginAdm';
import { ILoginMedico } from '../interfaces/ILoginMedico';
import { ILoginPaciente } from '../interfaces/ILoginPaciente';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public loginAdmin(adm: ILoginAdm) {
    return this.http.post(`${this.API}session`, adm);
  }

  public loginMedico(medico: ILoginMedico) {
    return this.http.post(`${this.API}session`, medico);
  }

  public loginPaciente(paciente: ILoginPaciente) {
    return this.http.post(`${this.API}session`, paciente);
  }
}
