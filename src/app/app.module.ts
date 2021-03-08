import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministradorGeralComponent } from './administrador-geral/administrador-geral.component';
import { PrefeituraComponent } from './prefeitura/prefeitura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorGeralComponent,
    PrefeituraComponent,
    ClienteComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
