import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

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