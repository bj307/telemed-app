import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICadastroAdm } from '../interfaces/ICadastroAdm';
import { ICadastroPaciente } from '../interfaces/ICadastroPaciente';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public cadastrarAdm(dados: ICadastroAdm) {
    return this.http.post(`${this.API}adm/cadastro`, dados);
  }

  public cadastrarPaciente(dados: any) {
    const paciente: ICadastroPaciente = {
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      cpf: parseInt(dados.cpf),
      rg: parseInt(dados.rg),
      telefone: parseInt(dados.telefone),
    };
    return this.http.post(`${this.API}paciente/cadastro`, paciente);
  }
}
