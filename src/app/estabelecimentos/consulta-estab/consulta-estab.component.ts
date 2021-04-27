import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ConfirmationService, MessageService } from "primeng/api";
import { EstabelecimentoService } from '../estabelecimento.service';

@Component({
  selector: 'app-consulta-estab',
  templateUrl: './consulta-estab.component.html',
  styleUrls: ['./consulta-estab.component.css']
})
export class ConsultaEstabComponent implements OnInit {

  estabelecimentos: any = [];
  loading: boolean = true;

  constructor(
    private service: EstabelecimentoService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService,
    private title: Title) { }

  ngOnInit() {
    this.loading = true;
    this.carregar();  
  }

  carregar(){
    this.title.setTitle('Lista de estabelecimentos');
    this.estabelecimentos = [];

    this.service.listar().subscribe(resposta => {
      this.estabelecimentos = resposta;
      this.loading = false;         
    });  
  }
  excluir(id: number){
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este estabelecimento?',
      accept: () => {
        this.service.excluir(id).subscribe( resposta => {
          this.messageService.add(
            {
              key: 'toast',
              severity: 'success',
              summary: 'Estabelecimento',
              detail: 'excluído com sucesso!'
            });   
            this.carregar();
        });    
      }
  });
  }
}
