import { Component } from '@angular/core';
import { CardModule} from 'primeng/card';
import { PrimeNGConfig } from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ProjetoIntegrador';
    constructor(private primengConfig: PrimeNGConfig) {}
    
    ngOnInit() {
      this.primengConfig.ripple = true;
    }
}
