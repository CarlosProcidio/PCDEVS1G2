import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentosComponent } from './estabelecimentos.component';
import { MeusEstabComponent } from './meus-estab/meus-estab.component';
import { ConsultaEstabComponent } from './consulta-estab/consulta-estab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstabelecimentosComponent, MeusEstabComponent, ConsultaEstabComponent],
  exports: [MeusEstabComponent, ConsultaEstabComponent]
})
export class EstabelecimentosModule {  }
