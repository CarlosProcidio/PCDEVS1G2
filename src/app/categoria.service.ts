import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:8080/categorias';

constructor(private http: HttpClient) { }
listar(){
  return this.http.get(this.url);
 }
}
