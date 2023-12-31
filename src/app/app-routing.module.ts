import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { UsuariosComponent } from './layouts/usuarios/usuarios.component';
import { MedicoHomeComponent } from './pages/medico-home/medico-home.component';
import { MedicoAgendaComponent } from './pages/medico-agenda/medico-agenda.component';
import { MedicoConsultasComponent } from './pages/medico-consultas/medico-consultas.component';
import { MedicoPacientesComponent } from './pages/medico-pacientes/medico-pacientes.component';
import { MedicoChatComponent } from './pages/medico-chat/medico-chat.component';
import { MedicoOutrosComponent } from './pages/medico-outros/medico-outros.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'in', redirectTo: 'in/dashboard', pathMatch: 'full' },
  {
    path: 'm',
    component: UsuariosComponent,
    children: [
      { path: 'dashboard', component: MedicoHomeComponent },
      { path: 'agenda', component: MedicoAgendaComponent },
      { path: 'consultas', component: MedicoConsultasComponent },
      { path: 'pacientes', component: MedicoPacientesComponent },
      { path: 'mensagens', component: MedicoChatComponent },
      { path: 'outros', component: MedicoOutrosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
