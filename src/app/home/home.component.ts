import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  imagens = [
    {
      url: "assets/imagens/Escuna pequena.jpg", discription: "barco no mar", 
      alt: "Barco no mar"
    },
    {
      url: "assets/imagens/Praia dos Coqueiros.jpg", discription: "barco no mar", 
      alt: "Praia bela"
    },
    {
      url: "assets/imagens/pousada do saci.jpg", discription: "barco no mar", 
      alt: "Oh delícia de lugar!"
    },
    {
      url: "assets/imagens/Peixes e tartaruga.jpg", discription: "barco no mar", 
      alt: "Delícias do mar!"
    },
  ]
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
