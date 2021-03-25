import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  url = "http://localhost:3000/administradores";


  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get(this.url);
   }
  
   buscarById(id: number) {
    return this.http.get(`${environment.url}`+'/administradores/'+id);
  }

  salvar(administradorGeral: any){
    return this.http.post(`${environment.url}`+'/administradores', administradorGeral);
  }

  atualizar(administradorGeral: any) {
    return this.http.put(`${environment.url}`+'/administradores/'+administradorGeral.id, administradorGeral);
  }

  excluir(id: number) {
    return this.http.delete(`${environment.url}`+'/administradores/'+id);
  }
 
}
