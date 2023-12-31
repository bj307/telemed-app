import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroPaciente } from 'src/app/interfaces/ICadastroPaciente';
import { IPaciente } from 'src/app/interfaces/IPaciente';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forms-user-session',
  templateUrl: './forms-user-session.component.html',
  styleUrls: ['./forms-user-session.component.css'],
})
export class FormsUserSessionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private cadastroService: CadastroService
  ) {}

  formPaciente!: FormGroup;
  formMedico!: FormGroup;
  formCadastro!: FormGroup;
  itsPaciente = true;
  itsCadastro = false;
  marginForm = '0';
  marginContext = '0';
  transition = 'margin-left 1.5s';
  transitionContext = 'margin-left 1s';
  title = 'Bem vindo(a)';
  message = 'Faça login para acessar suas consultas.';
  medicoPaciente = 'Sou médico';
  etapa1 = false;

  IPaciente = {
    cpf: '',
    email: '',
    senha: '',
  };

  IMedico = {
    crm: '',
    email: '',
    senha: '',
  };

  ICadastro = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    rg: '',
    telefone: '',
  };

  iError = {
    message: '',
    error: false,
  };

  ngOnInit(): void {
    this.verificaFormBuilder();
    this.ICadastro.telefone = '';
  }

  resetCadastro() {
    this.etapa1 = false;
    this.ICadastro.nome = '';
    this.ICadastro.email = '';
    this.ICadastro.senha = '';
    this.ICadastro.cpf = '';
    this.ICadastro.rg = '';
    this.ICadastro.telefone = '';
  }

  cadastroPaciente() {
    if (this.formCadastro.valid) {
      this.cadastroService.cadastrarPaciente(this.ICadastro).subscribe(
        (res) => {
          console.log(res);
          this.resetCadastro();
        },
        (erro) => {
          this.iError.error = true;
          this.iError.message = erro.error.text;

          setTimeout(() => {
            this.iError.error = false;
            this.iError.message = '';
          }, 3000);
        }
      );
    } else {
      if (!this.formCadastro.get('cpf')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um CPF válido.';
      } else if (!this.formCadastro.get('senha')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira uma senha válida.';
      } else if (!this.formCadastro.get('email')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um email válido.';
      } else if (!this.formCadastro.get('nome')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um nome válido.';
      } else if (!this.formCadastro.get('rg')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um RG válido.';
      } else if (!this.formCadastro.get('telefone')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um telefone válido.';
      }

      setTimeout(() => {
        this.iError.error = false;
        this.iError.message = '';
      }, 3000);
    }
  }

  loginPaciente() {
    if (this.formPaciente.valid) {
      this.loginService.loginPaciente(this.IPaciente).subscribe(
        (res: any) => {
          const paciente: IPaciente = { ...res };
          sessionStorage.setItem('paciente', JSON.stringify(paciente));
          this.router.navigate(['/dashboard']);
        },
        (erro) => {
          console.log(erro);
        }
      );
    } else {
      if (!this.formPaciente.get('cpf')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um CPF válido.';
      } else if (!this.formPaciente.get('senha')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira uma senha válida.';
      } else if (!this.formPaciente.get('email')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um email válido.';
      }

      setTimeout(() => {
        this.iError.error = false;
        this.iError.message = '';
      }, 3000);
    }
  }

  loginMedico() {
    if (this.formMedico.valid) {
      this.loginService.loginMedico(this.IMedico).subscribe(
        (res) => {
          console.log(res);
        },
        (erro) => {
          console.log(erro);
        }
      );
    } else {
      if (!this.formMedico.get('crm')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um CRM válido.';
      } else if (!this.formMedico.get('senha')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira uma senha válida.';
      } else if (!this.formMedico.get('email')?.valid) {
        this.iError.error = true;
        this.iError.message = 'Insira um email válido.';
      }

      setTimeout(() => {
        this.iError.error = false;
        this.iError.message = '';
      }, 3000);
    }
  }

  mudarTela() {
    if (this.itsPaciente) {
      this.outPaciente();
    } else {
      this.outMedico();
    }
  }

  cadastrarPaciente() {
    this.medicoPaciente = 'Já possuo conta';
    this.title = 'Cadastre-se';
    this.message = 'Cadastre-se para ser atendido(a) por um especialista.';
    this.itsCadastro = true;
    this.itsPaciente = false;
    this.marginForm = '-700px';
    this.transition = 'margin-left .5s';
    this.marginContext = '450px';
  }

  outPaciente() {
    this.medicoPaciente = 'Sou paciente';
    this.title = 'Olá Doutor(a)';
    this.message = 'Seja bem vindo(a) de volta.';
    this.itsCadastro = false;
    this.itsPaciente = false;
    this.marginForm = '-700px';
    this.transition = 'margin-left .5s';
    this.marginContext = '450px';
  }

  outMedico() {
    this.medicoPaciente = 'Sou médico';
    this.title = 'Bem vindo(a)';
    this.message = 'Faça login para acessar suas consultas.';
    this.itsCadastro = false;
    this.itsPaciente = true;
    this.marginForm = '0';
    this.marginContext = '0';
    this.transition = 'margin-left 1.5s';
  }

  avancar() {
    if (
      this.formCadastro.get('nome')?.valid &&
      this.formCadastro.get('email')?.valid &&
      this.formCadastro.get('senha')?.valid
    ) {
      this.etapa1 = true;
    } else {
      this.etapa1 = false;
    }
  }

  voltar() {
    this.etapa1 = false;
  }

  verificaFormBuilder() {
    this.formCadastro = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÀ-ÿ\\u00C0-\\u017F\\s]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      rg: ['', [Validators.required]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
    });
    this.formMedico = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      crm: ['', [Validators.required]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
    this.formPaciente = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
    });
  }
}
