import { AdministradorRoutes } from './../administrador/administrador.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentosComponent } from './estabelecimentos.component';
import { MeusEstabComponent } from './meus-estab/meus-estab.component';
import { ConsultaEstabComponent } from './consulta-estab/consulta-estab.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormEstabComponent } from './form-estab/form-estab.component';

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
    AdministradorRoutes,
    ConfirmationService,
    MessageService
  ],
  declarations: [
    EstabelecimentosComponent,
    MeusEstabComponent,
    FormEstabComponent,
    ConsultaEstabComponent,
    FormEstabComponent,
  ],
  providers: [MessageService,ConfirmationService],
  exports: [MeusEstabComponent, ConsultaEstabComponent, FormEstabComponent]
})
export class EstabelecimentosModule {  }
