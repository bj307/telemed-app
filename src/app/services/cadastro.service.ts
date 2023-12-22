import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICadastroAdm } from '../interfaces/ICadastroAdm';

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
}
