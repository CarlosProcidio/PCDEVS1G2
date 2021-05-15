import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url = 'http://localhost:8080/servicos';

constructor(private http: HttpClient) { }
listar(){
  return this.http.get(this.url);
 }
}
