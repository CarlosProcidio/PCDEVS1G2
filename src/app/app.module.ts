import { AdministradorModule } from './administrador/administrador.module';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PrefeituraComponent } from './prefeitura/prefeitura.component';
import { HotelComponent } from './hotel/hotel.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { ListaEstabComponent } from './cliente/lista-estab/lista-estab.component';
import { ConsultaEstabComponent } from './cliente/consulta-estab/consulta-estab.component';

@NgModule({
  declarations: [					
    AppComponent,
    PrefeituraComponent,
    HotelComponent,
    ClienteComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    ListaEstabComponent,
    ConsultaEstabComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AdministradorModule,
    ToastModule,
    AppRoutes,
    CardModule,
    CarouselModule,
    GalleriaModule,    
    FontAwesomeModule
    // ConfirmDialogModule,
    // ConfirmationService
  ],
  providers: [
    Title   
  ],
  bootstrap: [AppComponent],
  exports: [ListaEstabComponent, ConsultaEstabComponent]
})
export class AppModule {
   
 }
