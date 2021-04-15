import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {

  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeDPUr1ol-Tnb4t8cWdXMJ3q_B-DkDqlqM0wY5hLLcEO4gYgStlDgYMKL_MXsp8kEXW0&usqp=CAU.jpg',
    'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg',
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg',
    'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg',
    'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg'
    
  ];

 ngOnInit() {
    //  this.photoService.getImages().then(images => this.images = images);
  }
}

