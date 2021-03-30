import { OnInit, Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ConfirmationService, MessageService } from "primeng/api";
import { AdministradorService } from '../administrador.service';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class TabelaComponent implements OnInit {
  
  administradores: any = [];
  loading: boolean = true;

  constructor(
    private service: AdministradorService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService,
    private title: Title) { }

  ngOnInit() {
    this.loading = true;
    this.carregar();    
  }

  carregar(){
    this.title.setTitle('Lista de administradores');
    this.administradores = [];

    this.service.listar().subscribe(resposta => {
      this.administradores = resposta;
      this.loading = false;         
    });  
  }
  excluir(id: number){
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este cliente?',
      accept: () => {
        this.service.excluir(id).subscribe( resposta => {
          this.messageService.add(
            {
              key: 'toast',
              severity: 'success',
              summary: 'CLIENTE',
              detail: 'excluído com sucesso!'
            });   
            this.carregar();
        });    
      }
  });
  }

}
