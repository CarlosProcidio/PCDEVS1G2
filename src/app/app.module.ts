import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AppRoutes } from './app.routing';
import { ToastModule } from 'primeng/toast';
import { AdministradorModule } from './administrador/administrador.module';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HotelComponent } from './hotel/hotel.component';
import { PrefeituraComponent } from './prefeitura/prefeitura.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [					
    AppComponent,
    PrefeituraComponent,
    HotelComponent,
    ClienteComponent,
    LoginComponent,
    AuthenticationComponent,
    CreateAccountComponent
  ],
  imports: [
    SharedModule,
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
    HomeModule,
    ToastModule,
    AppRoutes,
    CardModule,
    CarouselModule,
    GalleriaModule,
    FontAwesomeModule,
    ConfirmDialogModule,
    EstabelecimentosModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
   
 }
