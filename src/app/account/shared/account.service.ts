import { environment } from './../../../environments/environment';
import { UserDTO } from './../dto/user-dto';
import { UserModel } from './../model/user-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  url: string = environment.urlback+'users';
  /* url: string = environment.url+'/users'; */

  constructor(private http: HttpClient) { }

  buscar(): Observable<UserModel[]>{
    return this.http.get(this.url)
        .pipe( map( resposta => <UserModel[]> resposta) );
  }

  salvar(user: UserDTO): Observable<UserModel>{
    return this.http.post(this.url, user)
          .pipe( map(resposta => <UserModel> resposta) );
  }

  atualizar(user: UserDTO){
    return this.http.put(this.url+'/'+user.id, user)
    .pipe( map(resposta => <UserModel> resposta) );
  }

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  
}
