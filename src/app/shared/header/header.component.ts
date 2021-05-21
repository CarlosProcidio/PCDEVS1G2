import { CategoriaService } from './../../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias: any = [];
  constructor(
    private categoriaService: CategoriaService
  ) {
    
   }

  ngOnInit() {
    this.categoriaService.listar().subscribe(resposta => this.categorias = resposta)
  }

}
