import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  url = "http://localhost:3000/estabelecimentos";

  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get(this.url);
   }
   buscarById(id: number) {
    return this.http.get(`${environment.url}`+'/estabelecimentos/'+id);
  }
  salvar(estabelecimentoGeral: any){
    return this.http.post(`${environment.url}`+'/estabelecimentos', estabelecimentoGeral);
  }
  atualizar(estabelecimentoGeral: any) {
    return this.http.put(`${environment.url}`+'/estabelecimentos/'+estabelecimentoGeral.id, estabelecimentoGeral);
  }
  excluir(id: number) {
    return this.http.delete(`${environment.url}`+'/estabelecimentos/'+id);
  } 
}
