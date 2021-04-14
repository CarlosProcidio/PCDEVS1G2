import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {

  images: any[];

 /* constructor(private photoService: PhotoService) { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];*/
 ngOnInit() {
    //  this.photoService.getImages().then(images => this.images = images);
  }
}


@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages() {
  return this.http.get<any>('assets/showcase/data/photos.json')
    .toPromise()
    .then(res => <'typeof Image'[]>res.data)
    .then(data => { return data; });
  }
}


// implantado junto com o html do primeng 
/*export class GalleriaAutoplayDemo implements OnInit {
  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
      this.photoService.getImages().then(images => this.images = images)
  }
}
*/