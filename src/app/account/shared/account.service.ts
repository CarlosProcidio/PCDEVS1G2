import { UserDTO } from './../dto/user-dto';
import { UserModel } from './../model/user-model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  buscar(): Observable<UserModel[]>{
    return this.http.get(this.urlback)
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


  async login(user: UserModel) {
    const resposta = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (resposta && resposta.access_token) {
      window.localStorage.setItem('token', resposta.access_token);
      return true;
    }

    return false;
  }

  //async createAccount(account: any) {
  //  const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise();
  //  return result;
  //}

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  /*
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
  */
}
