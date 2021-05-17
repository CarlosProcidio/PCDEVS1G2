import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { UserDTO } from '../dto/user-dto';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ListAccountComponent implements OnInit {

  users: any = [];
  loading: boolean = true;

  constructor(
    private service: AccountService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService,
    private title: Title) { }

  ngOnInit() {
    this.loading = true;
    this.carregar();
  }

  carregar(){
    this.title.setTitle('Lista de usuários');
    this.users = [];

    this.service.buscar().subscribe(resposta => {
      this.users = resposta;
      this.loading = false;         
    });  
  }

  excluir(id: UserDTO){
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este usuário?',
      accept: () => {
        this.service.excluir(id).subscribe( resposta => {
          this.messageService.add(
            {
              key: 'toast',
              severity: 'success',
              summary: 'Usuário',
              detail: 'excluído com sucesso!'
            });   
            this.carregar();
        });    
      }
  });
  }

}
