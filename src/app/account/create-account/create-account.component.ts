import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    tel_cel: ''
  };

  operacao = true;
  
  constructor( private accountService: AccountService ) { }

  cadastrarOuAtualizar() {
    if (this.operacao) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {
    this.accountService.salvar(this.user).subscribe(resposta => console.log(resposta))
  }

  atualizar() {
    this.accountService.atualizar(this.user).subscribe(resposta => console.log(resposta))
  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
