import { FooterComponent } from './header/footer/footer.component';
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
import {DropdownModule} from 'primeng/dropdown';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ConfirmationService, MessageService } from 'primeng/api';


import { AppComponent } from './app.component';
import { PrefeituraComponent } from './prefeitura/prefeitura.component';
import { HotelComponent } from './hotel/hotel.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AppRoutes } from './app.routing';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [				

    AppComponent,
    PrefeituraComponent,
    HotelComponent,
    ClienteComponent,
    PrincipalComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
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
    AppRoutes,
    // ConfirmDialogModule,
    // ConfirmationService
  ],
  providers: [
    Title,
    // MessageService,
    // ConfirmationService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

