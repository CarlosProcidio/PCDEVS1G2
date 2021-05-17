import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user = {
    id_user: '',
    nome: '',
    email: '',
    senha: '',
    tel_cel: ''
  };
  operacao = true;
  constructor(private accountService: AccountService ) {

  }
  
  adicionar() {
    this.accountService.salvar(this.user).subscribe(resposta => console.log(resposta))
  }

  atualizar() {

  }

  ngOnInit() {
    //fazer um IF pra verificar se tem o ID
    //se existe id, manda req e busca somente 1 usuário
    
  }

  onSubmit() {

  }
}
