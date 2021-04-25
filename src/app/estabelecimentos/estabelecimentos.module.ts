import { MessageService, ConfirmationService } from 'primeng/api';
import { ConsultaEstabComponent } from './consulta-estab/consulta-estab.component';
import { FormEstabComponent } from './form-estab/form-estab.component';
import { MeusEstabComponent } from './meus-estab/meus-estab.component';
import { EstabelecimentosComponent } from './estabelecimentos.component';
import { EstabelecimentoRoutes } from './estabelecimento.routing';
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
    EstabelecimentoRoutes,
  ],
  declarations: [
    EstabelecimentosComponent,
    MeusEstabComponent,
    FormEstabComponent,
    ConsultaEstabComponent,
  ],
  providers: [MessageService,ConfirmationService],
  exports: [MeusEstabComponent, ConsultaEstabComponent, FormEstabComponent]
})
export class EstabelecimentosModule {  }
