import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBlind, faCoffee, faConciergeBell, faDeaf, faDumbbell, faGlobe, faLuggageCart, faMoneyCheck, faParking, faPaw, faSmoking, faSmokingBan, faSnowflake, faSpa, faStar, faSwimmingPool, faUtensils, faWheelchair, faWifi, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { EstabelecimentoService } from '../estabelecimentos/estabelecimento.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {
  faWeelchair = faWheelchair;
  faDeaf = faDeaf;
  faBlind = faBlind;
  faWineBottle = faWineBottle;
  faCoffee = faCoffee;
  faUtensils = faUtensils;
  faPaw = faPaw;
  faSnowflake = faSnowflake;
  faLuggageCart = faLuggageCart;
  faSpa = faSpa;
  faParking = faParking;
  faSmoking = faSmoking;
  faSmokingBna = faSmokingBan;
  faGlobe = faGlobe;
  fawifi = faWifi;
  faSwimmimngPool = faSwimmingPool;
  faDumbbell = faDumbbell;
  faConciergeBell = faConciergeBell;
  faMoneyCheck = faMoneyCheck;
  faStar = faStar

  images = [
    '/assets/imagens/id-1/caesar salad.jpg','/assets/imagens/id-1/calabresa aperitivo.jpg','/assets/imagens/id-1/hot dog de calabresa.jpg','/assets/imagens/id-1/monte seu lanche.jpg'
    /*
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeDPUr1ol-Tnb4t8cWdXMJ3q_B-DkDqlqM0wY5hLLcEO4gYgStlDgYMKL_MXsp8kEXW0&usqp=CAU.jpg',
    'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg',
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg',
    'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg',
    'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg'
    */

  ];
  estabelecimento: any = {}; 
  constructor(private route: ActivatedRoute, private service: EstabelecimentoService) { }

  ngOnInit() {
    let estabelecimentoId = this.route.snapshot.params['id'];
    this.service.buscarById(estabelecimentoId).subscribe(resposta => this.estabelecimento = resposta);
    //  this.photoService.getImages().then(images => this.images = images);
  }
}
