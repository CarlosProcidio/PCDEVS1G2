import { SubcategoriaService } from './../subcategoria.service';
import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-estab',
  templateUrl: './consulta-estab.component.html',
  styleUrls: ['./consulta-estab.component.css']
})
export class ConsultaEstabComponent implements OnInit {

  subcategoria:any = {};
  estabelecimentos: any = [];
  loading: boolean = true;

  constructor(
    private subcategoriaService: SubcategoriaService,
    private route: ActivatedRoute,
    private title: Title) {
      this.route.paramMap.subscribe(param => {
        this.ngOnInit();
      });
     }

  ngOnInit() {
    console.log("Teste");
    this.loading = true;
    this.carregar();  
  }

  carregar() {
    this.title.setTitle('Lista de estabelecimentos');
    this.estabelecimentos = [];

    let id = this.route.snapshot.params['id'];
    debugger;
    this.subcategoriaService.buscaPorId(id).subscribe( subcategoria => {
      this.subcategoria = subcategoria;
      this.estabelecimentos =  subcategoria.estabelecimentos;
    });

  }
 
}
