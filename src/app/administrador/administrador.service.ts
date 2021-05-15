import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  url = "http://localhost:8080/estabelecimentos";


  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get(this.url);
   }
  
   buscarById(id: number) {
    return this.http.get(`${environment.url}`+'/administradores/'+id);
  }

  salvar(administradorGeral: any){
    return this.http.post(`${environment.url}`+'/estabelecimentos', administradorGeral);
  }

  atualizar(administradorGeral: any) {
    return this.http.put(`${environment.url}`+'/estabelecimentos/'+administradorGeral.id, administradorGeral);
  }

  excluir(id: number) {
    return this.http.delete(`${environment.url}`+'/estabelecimentos/'+id);
  }
 
}
