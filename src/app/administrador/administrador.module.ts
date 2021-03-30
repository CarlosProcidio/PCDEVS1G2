import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import { TabelaComponent } from './tabela/tabela.component';
import { AdministradorRoutes } from './administrador.routing';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    AdministradorRoutes
  ],
  declarations: [
    AdministradorComponent,
    FormularioComponent,
    TabelaComponent,
  ],
  providers: [MessageService,ConfirmationService]
})
export class AdministradorModule { }
