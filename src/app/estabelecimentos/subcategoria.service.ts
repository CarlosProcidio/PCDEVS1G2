import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
 url = 'http://localhost:8080/subcategoria';
constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get(this.url);
  }

  buscaPorId(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}
