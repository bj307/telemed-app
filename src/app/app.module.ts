import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { FormsLoginComponent } from './components/forms-login/forms-login.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SessionComponent } from './pages/session/session.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { FormsUserSessionComponent } from './components/forms-user-session/forms-user-session.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UsuariosComponent } from './layouts/usuarios/usuarios.component';
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { MedicoHomeComponent } from './pages/medico-home/medico-home.component';
import { MedicoAgendaComponent } from './pages/medico-agenda/medico-agenda.component';
import { MedicoConsultasComponent } from './pages/medico-consultas/medico-consultas.component';
import { MedicoPacientesComponent } from './pages/medico-pacientes/medico-pacientes.component';
import { MedicoChatComponent } from './pages/medico-chat/medico-chat.component';
import { MedicoOutrosComponent } from './pages/medico-outros/medico-outros.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdminComponent,
    HomeAdminComponent,
    FormsLoginComponent,
    LoginComponent,
    NavbarComponent,
    SessionComponent,
    InicioComponent,
    FormsUserSessionComponent,
    CalendarComponent,
    UsuariosComponent,
    SidebarUserComponent,
    MedicoHomeComponent,
    MedicoAgendaComponent,
    MedicoConsultasComponent,
    MedicoPacientesComponent,
    MedicoChatComponent,
    MedicoOutrosComponent,
    NavbarUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    TableModule,
    BrowserAnimationsModule,
    TagModule,
    RatingModule,
    MultiSelectModule,
    DropdownModule,
    CarouselModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  providers: [
    provideNgxMask({
      /* opções de cfg */
    }),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
