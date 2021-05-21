import { EstabelecimentoService } from './../../estabelecimentos/estabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class LandingPageComponent implements OnInit {

  estabelecimentos: any = [];
  loading: boolean = true;

  constructor(
    private primengConfig: PrimeNGConfig,
    private service: EstabelecimentoService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService) { }
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
    this.loading = true;
    this.carregar();
  }

  carregar(){
    this.estabelecimentos = [];

    this.service.listar().subscribe(resposta => {
      this.estabelecimentos = resposta;
      this.loading = false;         
    });  
  }
}
