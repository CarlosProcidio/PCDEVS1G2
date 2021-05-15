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
}
