import { UserDTO } from './dto/user-dto';
import { UserModel } from './model/user-model';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  url: string = environment.urlback+'users';

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
}
