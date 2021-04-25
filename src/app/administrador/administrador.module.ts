import { MessageService, ConfirmationService } from 'primeng/api';
import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdministradorComponent } from './administrador.component';
import { AdministradorRoutes } from './administrador.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageModule } from 'primeng/message';

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
    FontAwesomeModule,
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
