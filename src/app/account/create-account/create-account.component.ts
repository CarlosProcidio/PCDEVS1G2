import { CreateAccountService } from './create-account.service';
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
  constructor(private createAccountService: CreateAccountService ) {

  }
  
  adicionar() {
    this.createAccountService.salvar(this.user).subscribe(resposta => console.log(resposta))
  }

  atualizar() {

  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
