import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService  {

url = 'http://localhost:8080/fotos';  
constructor(private http: HttpClient) { }
listar(){
  return this.http.get(this.url);
 }

 buscarById(id: number) {
  return this.http.get(this.url + '/'+id);
}

 salvar(foto: any){
  return this.http.post(`${environment.url}`+'/fotos', foto);
}
atualizarFoto(foto: any) {
  return this.http.put(`${environment.url}`+'/fotos/'+foto.id, foto);
}

 excluir(id: number) {
  return this.http.delete(`${environment.url}`+'/fotos/'+id);
}

}
