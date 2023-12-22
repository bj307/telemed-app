import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroAdm } from 'src/app/interfaces/ICadastroAdm';
import { ILoginAdm } from 'src/app/interfaces/ILoginAdm';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css'],
})
export class FormsLoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  height = '400px';
  right = '0';
  left = '25%';
  transition = 'margin 1s';
  loginForm!: FormGroup;
  cadForm!: FormGroup;
  e1Cad!: FormGroup;
  titulo = 'Faça login';
  login = true;
  e2 = 'white';
  e2a = 'black';
  etapa1 = true;
  inputVazio = false;
  message = '';
  cadastroOk = false;

  ILogin: ILoginAdm = {
    email: '',
    senha: '',
  };

  ICadastro: ICadastroAdm = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: '',
  };
  confirmaSenha = '';

  ngOnInit(): void {
    this.verificaFormBuilder();
    this.left = '25%';
    this.right = '0';
    this.height = '400px';
  }

  mudarForm() {
    if (this.login) {
      this.goCadastro();
    } else {
      this.goLogin();
    }
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.loginService.loginAdmin(this.ILogin).subscribe(
        (res: any) => {
          sessionStorage.setItem('adm_user', JSON.stringify(res));
          this.router.navigate(['/admin']);
        },
        (erro) => {
          this.message = erro.error.text;
          this.inputVazio = true;
          setTimeout(() => {
            this.inputVazio = false;
          }, 4000);
        }
      );
    } else {
      this.inputVazio = true;
      setTimeout(() => {
        this.inputVazio = false;
      }, 3000);
      this.message = 'Preencha todos os campos.';
    }
  }

  cadastrar() {
    if (this.cadForm.valid) {
      if (this.ICadastro.senha === this.confirmaSenha) {
        this.cadastroService.cadastrarAdm(this.ICadastro).subscribe(
          (res) => {
            this.goLogin();
            this.message = 'Cadastro efetuado, faça login.';
            this.cadastroOk = true;
            setTimeout(() => {
              this.cadastroOk = false;
            }, 4000);
          },
          (erro) => {
            console.log(erro);
          }
        );
      } else {
        this.message = 'Senhas diferentes, confirme sua senha.';
        this.inputVazio = true;
        setTimeout(() => {
          this.inputVazio = false;
        }, 3000);
      }
    } else if (this.e1Cad.valid) {
      if (!this.cadForm.get('telefone')?.valid) {
        this.message = 'Insira um telefone válido.';
      } else if (!this.cadForm.get('senha')?.valid) {
        this.message = 'Insira uma senha válida.';
      } else if (!this.cadForm.get('confirmaSenha')?.valid) {
        this.message = 'Confirme sua senha.';
      }
    }
  }

  avancarCadastro() {
    if (this.e1Cad.valid) {
      this.etapa1 = false;
      this.e2 = '#0c1e35';
      this.e2a = 'white';
    } else {
      if (!this.e1Cad.get('nome')?.valid) {
        if (this.e1Cad.get('nome')?.errors?.['required']) {
          this.message = 'O campo nome é obrigatório.';
        } else {
          this.message = 'Insira um nome válido.';
        }
      } else if (!this.e1Cad.get('email')?.valid) {
        if (this.e1Cad.get('email')?.errors?.['required']) {
          this.message = 'O campo email é obrigatório.';
        } else {
          this.message = 'Insira um email válido.';
        }
      } else if (!this.e1Cad.get('cpf')?.valid) {
        if (this.e1Cad.get('cpf')?.errors?.['required']) {
          this.message = 'O campo CPF é obrigatório.';
        } else {
          this.message = 'Insira um cpf válido.';
        }
      }

      this.inputVazio = true;
      setTimeout(() => {
        this.inputVazio = false;
      }, 3000);
    }
  }

  goCadastro() {
    this.limpaInput();
    this.login = false;
    this.left = '0';
    this.right = '25%';
    this.titulo = 'Cadastre-se';
    this.height = '490px';
    this.e2 = 'white';
    this.e2a = 'black';
    setTimeout(() => {
      this.etapa1 = true;
    }, 1);
  }

  goLogin() {
    this.limpaInput();
    this.login = true;
    this.left = '25%';
    this.right = '0';
    this.titulo = 'Faça login';
    this.height = '400px';
    this.etapa1 = false;
  }

  limpaInput() {
    this.ICadastro.cpf = '';
    this.ICadastro.email = '';
    this.ICadastro.nome = '';
    this.ICadastro.senha = '';
    this.ICadastro.telefone = '';
    this.confirmaSenha = '';
    this.ILogin.email = '';
    this.ILogin.senha = '';
  }

  verificaFormBuilder() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
    this.cadForm = this.formBuilder.group({
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      confirmaSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
    this.e1Cad = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
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

  form1() {
    this.etapa1 = true;
  }

  form2() {
    this.avancarCadastro();
  }

  verificaInputCadastro() {}
}
